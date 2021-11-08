import React, { useState } from 'react'
import { useFormik } from 'formik'
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { showToast } from '../redux/actions'

const S = {
    ErrorMessage: styled.span`
        color:red;
        position: absolute;
    `,
    Input: styled.input`
        margin-right: 10px;
    `,
    Message: styled.span`
        margin-right: 10px;
    `,
    CategoryName: styled.div`
    text-transform: uppercase;
    margin: 20px 0px;
    `
}

const Checklist = ({ data }) => {
    const dispatch = useDispatch()
    const [ isSubmitted, setIsSubmitted ] = useState(false)
    let items  = []
    Object.keys(data).map(key => items.push(...data[key].items))
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: values => {
            console.log('values', values)
            dispatch(showToast())
        },
        validate: values => {
            let errors = {}
            for( let i = 0; i < items.length; i++ ) {
                if(items[i].required && !values[items[i].name]) {
                    errors[items[i].name] = "Required"
                }
            }
            if(!values.name) {
                errors.name = "Required"
            }
            if(!values.email) {
                errors.email = "Required"
            }
            return errors
        }
    })

    const displayCheckList = () => {
        return( <>
            <div>
                <div>
                <span>Name: </span>
                <S.Input
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        error={formik.errors.name}
                    />
                { isSubmitted && formik.errors.name && <S.ErrorMessage> {formik.errors.name}</S.ErrorMessage>}
                </div>
                <div>
                <span>Email: </span>
                <S.Input
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                    /> 
                { isSubmitted && formik.errors.email && <S.ErrorMessage> {formik.errors.email}</S.ErrorMessage>}
                </div>
            </div>
            {Object.keys(data).map(key => <div key={key} name={key}>
                <S.CategoryName>{data[key].title}</S.CategoryName>
                {data[key].items.map(item => 
                <div key={item.name} >
                    <input
                        type="checkbox" 
                        name={item.name} 
                        onChange={formik.handleChange}
                        value={formik.values[item.name]}
                        error={formik.errors[item.name]}
                    />
                    <S.Message>{item.message}{item.required && '*'}</S.Message>
                    { isSubmitted && formik.errors[item.name] && <S.ErrorMessage> {formik.errors[item.name]}</S.ErrorMessage>}
                </div>)}
            </div>)}
            </>
        ) 
    }

    
    return(
        <form onSubmit={formik.handleSubmit} >
            <div>{displayCheckList()}</div>
            <button type="submit" onClick={() =>setIsSubmitted(true)}>Submit</button>
        </form>
    )
}

export default Checklist
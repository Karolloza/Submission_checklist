import React from 'react'
import styled from 'styled-components';

const S = {
    PageHeader: styled.h1`
        text-align:center;
    `
}
const PageHeader = ({ text }) => <S.PageHeader>{text}</S.PageHeader>

export default PageHeader
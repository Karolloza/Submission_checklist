import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import PageHeader from '../components/PageHeader'
import Checklist from '../components/Checklist'
import { fetchSubmissionChecklist } from '../redux'
import { getSubmissionData } from '../redux/selectors'

const S = {
  Dashboard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

const Dashboard = () => {
    const dispatch = useDispatch()
    const submissionData = useSelector(getSubmissionData)
    
    useEffect(() => {
        dispatch(fetchSubmissionChecklist())
    },[])

  return (
    <S.Dashboard>
        <PageHeader text="Submission checklist"/>
        <Checklist data={submissionData} />
    </S.Dashboard>
  );
};

export default Dashboard;

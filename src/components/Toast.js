import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import { getToast } from '../redux/selectors';
import { hideToast } from '../redux/actions';

const S = {
    Alert: styled(Alert)`
        position: absolute;
        bottom: 10px;
        right: 10px;
        visibility: ${({visible}) => visible ? 'visible' : 'hidden'};
    `
}
const Toast = () => {
  const dispatch = useDispatch()
  const isVisible = useSelector(getToast)
  useEffect(() => {
      if(isVisible) {
        setTimeout(() => {
            dispatch(hideToast())
          }, 3000);
      }
  }, [isVisible]);

  return (
      <S.Alert variant="filled" severity="success" visible={isVisible}>
        Form Submitted 
      </S.Alert>
  );
}

export default Toast
import React from 'react';
import styled from 'styled-components';

const S = {
  Layout: styled.div`
    width: 80%;
    margin: 0 auto;
  `,
};
const Layout = ({ children }) => <S.Layout>{children}</S.Layout>;

export default Layout;

import React from 'react';
import * as S from './style';
import { Outlet } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <Outlet/>
      <S.FooterWrapper>
          <h1>풀스텍 이해하기 프로젝트</h1>
      </S.FooterWrapper>
    </>

  )
}

export default Footer

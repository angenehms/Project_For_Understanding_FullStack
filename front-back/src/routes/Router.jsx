import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Detail from '../pages/Detail/Detail';
import Content from '../pages/Content/Content';
import Error from '../pages/Error/Error';
import Footer from '../components/Footer/Footer'

const Router = () => {
  return (

    <BrowserRouter>

        <Routes>

          <Route element={<Footer/>}>
            <Route path="/" element={<Navigate to="/content"/>}>
                <Route path="/content" element={<Content/>}/>
                <Route path="/:contendId" element={<Detail/>}/>
            </Route>
          </Route>  

            <Route path="/*" element={<Error/>}/>

        </Routes>
    
    </BrowserRouter>

  )
}

export default Router

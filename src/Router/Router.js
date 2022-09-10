import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Project01 from '../Project01/Project01';
import Project02 from '../Project02/Project02';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project01' element={<Project01/>}/>
            <Route path='/project02' element={<Project02/>}/>
        </Routes>
    );
};

export default Router;
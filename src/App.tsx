import React from 'react';
import Home from './Home'
import HomeNew from './HomeNew'
import ProjectsNew from './ProjectsNew'
import AboutNew from './AboutNew'
import './App.css';
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => {




  return (
    <Routes>
        <Route path='/' element={<HomeNew />} />
        <Route path='/projects' element={<ProjectsNew />} />
        <Route path='/about' element={<AboutNew />} />
    </Routes>
  );
}

export default App;

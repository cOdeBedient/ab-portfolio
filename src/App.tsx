import React from 'react';
import Home from './Home'
import './App.css';
import { Routes, Route } from "react-router-dom"

const App: React.FC = () => {




  return (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;

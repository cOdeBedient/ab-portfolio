import React from 'react';
import Home from './version-1-components/Home'
import HomeNew from './HomeNew'
import ProjectsNew from './ProjectsNew'
import AboutNew from './AboutNew'
import { Routes, Route } from "react-router-dom"
import {useState , useEffect} from 'react';

interface Backgrounds {
  home: string;
  projects: string;
  smallHead: string;
}

const App: React.FC = () => {
const [backgrounds, setBackgrounds] = useState<Backgrounds>({home: '', projects: '', smallHead: ''})

  useEffect(() => {
        const homeBackground = new Image()
        homeBackground.src = "/assets/adam-head.jpg"
        const projectsBackground = new Image()
        projectsBackground.src = "/assets/leaf-sun.jpg"
        const aboutHead = new Image()
        aboutHead.src = "/assets/Porty-Head.jpg"

        homeBackground.onload = () => {
          setBackgrounds((prev) => ({
            ...prev,
            home: homeBackground.src
          }));
        };
    
        projectsBackground.onload = () => {
          setBackgrounds((prev) => ({
            ...prev,
            projects: projectsBackground.src
          }));
        };
    
        aboutHead.onload = () => {
          setBackgrounds((prev) => ({
            ...prev,
            smallHead: aboutHead.src
          }));
        };
  }, [])


  return (
    <Routes>
        <Route path='/' element={<HomeNew backgrounds={backgrounds}/>} />
        <Route path='/projects' element={<ProjectsNew backgrounds={backgrounds} />} />
        <Route path='/about' element={<AboutNew backgrounds={backgrounds} />} />
    </Routes>
  );
}

export default App;

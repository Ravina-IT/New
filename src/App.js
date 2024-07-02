import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbars from './components/Navbars'  
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css'
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
      
    <BrowserRouter>  
    <div className='App'>
      <Navbars></Navbars>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </div>
    </BrowserRouter>  
  )
}
export default App;

import { Routes } from 'react-router-dom';
import React from 'react';
import './index.css';
import { BrowserRouter,  Route, Link } from 'react-router-dom';
import Header from './Components/Header'
import Aboutus from './Components/Aboutus'
import Footer from './Components/Footer' 
import Contactus from './Components/Contactus'
import Home from './Components/Home'
import Settings from './Components/Settings';
import PostTender from "./Components/PostTender.js";




function App() {
  
  
  return (
    <div className="App">
   
   <BrowserRouter>
      <Header />
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/Aboutus.js" element={<Aboutus/>} />
        <Route  path = "/Contactus.js" element = {<Contactus/>}/> 
        <Route  path = "/Settings.js" element = {<Settings/>}/> 
        <Route  path = "/PostTender.js" element = {<PostTender/>}/> 
      </Routes>
       <Footer/>
    </BrowserRouter> 
    </div>
  );
}
export default App;

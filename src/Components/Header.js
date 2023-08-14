import logo from '../images/mss.jpg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaHome, FaPhone, FaUser, FaInfoCircle, FaBars } from "react-icons/fa";
import { FiSettings } from 'react-icons/fi';
import { useTranslation, initReactI18next } from "react-i18next";
import Css from "./Header.css"
import Person from "../images/person.jpg";
import settings from "../images/settings.webp"
import DarkMode from './DarkMode';
import axios from 'axios';

function Info(){
  return(
  
  <div className='info'> <p>+251-345-333-444</p> </div>
  )
  /** 
 *var registerButton = document.getElementById('registerButton');
  // Attach an event listener to the button
  registerButton.addEventListener('click', function () {
    // Redirect to the Laravel registration form route
    window.location.href = '/login';
  });
  
  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        // Provide the necessary registration data
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle the error if needed
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        // Provide the necessary login credentials
        email: 'john@example.com',
        password: 'password123',
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error); // Handle the error if needed
    }
  };
  
*/
  }

function Header() {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = (e) => {
    setShowMenu(!showMenu);
  };



  const [isSubcategoryOpen, setIsSubcategoryOpen] = useState(false);
    const [isSubcategoryOpen2, setIsSubcategoryOpen2] = useState(false);
    const [isSubcategoryOpen3, setIsSubcategoryOpen3] = useState(false);
    const [isSubcategoryOpen4, setIsSubcategoryOpen4] = useState(false);
    const [isSubcategoryOpen5, setIsSubcategoryOpen5] = useState(false);
  
    function handleToggleSubcategory() {
      setIsSubcategoryOpen(!isSubcategoryOpen);
      setIsSubcategoryOpen2(false);
      setIsSubcategoryOpen3(false);
      setIsSubcategoryOpen4(false);
      setIsSubcategoryOpen5(false);
    }
  function catagory2(){
    setIsSubcategoryOpen2(!isSubcategoryOpen2)
    setIsSubcategoryOpen(false);
    setIsSubcategoryOpen3(false);
    setIsSubcategoryOpen4(false);
    setIsSubcategoryOpen5(false);
  }
  function catagory3(){
    setIsSubcategoryOpen3(!isSubcategoryOpen3)
    setIsSubcategoryOpen(false);
    setIsSubcategoryOpen2(false);
    setIsSubcategoryOpen4(false);
    setIsSubcategoryOpen5(false);
  }
  function catagory4(){
    setIsSubcategoryOpen(false);
    setIsSubcategoryOpen2(false);
    setIsSubcategoryOpen3(false);
    setIsSubcategoryOpen5(false);
    setIsSubcategoryOpen4(!isSubcategoryOpen4)
  }
  function catagory5(){
    setIsSubcategoryOpen5(!isSubcategoryOpen5)
    setIsSubcategoryOpen(false);
    setIsSubcategoryOpen2(false);
    setIsSubcategoryOpen3(false);
    setIsSubcategoryOpen4(false);
  }
/*<a href="http://127.0.0.1:8000/login" class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Log in</a>
//<a href="http://127.0.0.1:8000/register" class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Register</a> */

  return (
    <div>
      <div className='info'><Info /></div>
      
      <nav className="navbar1">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        {isMobile ? (
          <FaBars className="menu-icon" onClick={handleMenuClick} />
        ) : (
          <div className="nav-container">
            <ul>
              <li>
                <Link to="">                 
                  <span>{t("home")}</span>
                </Link>
              </li>
              <li>
                <Link to="/Aboutus.js">                 
                  <span>{t("about_us")}</span>
                </Link>
              </li>
              <li>
                <Link to="/Contactus.js">                
                  <span>{t("contact")}</span>
                </Link>
              </li>
              <li className="dropdown">
                <a href="#">
                  {t("tender")}
                </a>
                <div className="dropdown-content">
                  <Link  to="/">{t("all_tenders")}</Link>
                  <Link to="/">{t("free_tenders")}</Link>
                  <Link to="/">{t("saved_tenders")}</Link>
                  <Link to="/">{t("alert_tenders")}</Link>
                </div>
              </li>
              <li className="dropdown">
                <a href= "#">
                  {t("categories")}
                </a>
               <div className="dropdown-content">
              <p className="dropdown-toggle" onClick={handleToggleSubcategory}>Catagory 1 <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen && (
             <ul className="dropdown-menu">
               <li><a href="/Home.js">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}
            </div>
            <p className="dropdown-toggle" onClick={catagory2}>Catagory 2   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen2 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>

         <p className="dropdown-toggle" onClick={catagory3}>Catagory 3   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen3 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>
               <p className="dropdown-toggle" onClick={catagory4}>Catagory 4   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen4 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>
               <p className="dropdown-toggle" onClick={catagory5}>Catagory 5   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen5 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>

               
                </div>
              </li>
              <li className="dropdown">
              <img src={Person} className="person" alt="logo" />
              <div className="dropdown-content">
              <a href="http://127.0.0.1:8000/register"className='btn'> {t("register")}</a>               
                 <a href="http://127.0.0.1:8000/login"className='btn'>{t("login")}</a>
               <button className='btn' onClick="#">{t("profile")}</button>
           
                </div>
              </li>
              <li>
                <Link to="/Settings.js">
                <img src={settings} alt="image-setting" className="image-setting" />
                </Link>
              </li>
              
            </ul>
          </div>
        )}
      </nav>
      {isMobile && showMenu && (
       <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/Home.js">              
                <span>{t("home")}</span>
              </Link>
            </li>
            <li>
              <Link to="/Aboutus.js">
                <span>{t("about_us")}</span>
              </Link>
            </li>
            <li>
              <Link to="/Contactus.js">
                
                <span>{t("contact")}</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                {t("tender")}
              </Link>
              <div className="dropdown-content">
              <Link  to="/">{t("all_tenders")}</Link>
                  <Link to="/">{t("free_tenders")}</Link>
                  <Link to="/">{t("saved_tenders")}</Link>
                  <Link to="/">{t("alert_tenders")}</Link>
                </div>
            </li>
            <li>
              <Link to="#">
                {t("categories")}
                <div className="dropdown-content">
              <p className="dropdown-toggle" onClick={handleToggleSubcategory}>Catagory 1 <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen && (
             <ul className="dropdown-menu">
               <li><a href="/Home.js">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}
             
             
            </div>
            <p className="dropdown-toggle" onClick={catagory2}>Catagory 2   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen2 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>
         <p className="dropdown-toggle" onClick={catagory3}>Catagory 3   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen3 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>
               <p className="dropdown-toggle" onClick={catagory4}>Catagory 4   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen4 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
              
             </ul>
             )}</div>
               <p className="dropdown-toggle" onClick={catagory5}>Catagory 5   <span className="caret"></span></p> <div className="dropdown">
             {isSubcategoryOpen5 && (
             <ul className="dropdown-menu">
               <li><a href="#">Subcategory 1</a></li>
              <li><a href="#">Subcategory 2</a></li>
              <li><a href="#">Subcategory 3</a></li>
             </ul>
             )}</div>
                </div>
              </Link> 
            </li>
            <li className="dropdown">
              <img src={Person} className="person" alt="logo" />
              <div className="dropdown-content">
              <a href="http://127.0.0.1:8000/register"className='btn'> {t("register")}</a>               
               <a href="http://127.0.0.1:8000/login"className='btn'>{t("login")}</a>
               <button className='btn' onClick="#">{t("profile")}</button>
                </div>
              </li>
            <li>
              <Link to="/settings.js">
              <img src={settings} alt="image-setting" className="image-setting" />
              </Link>
            </li>
          
          </ul>
          
        </div>
      )}
    </div>
  
  )
}

export default Header;
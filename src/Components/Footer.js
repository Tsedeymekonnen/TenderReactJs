import React, { useState } from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin } from 'react-icons/fa';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useTranslation, initReactI18next } from "react-i18next";


function Footer() {
  const {t} = useTranslation()
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const phonebookList = [
    { id: 1, name: 'Company A', link: '#' },
    { id: 2, name: 'Company B', link: '#' },
    { id: 3, name: 'Company C', link: '#' },
    { id: 4, name: 'Company D', link: '#' },
    { id: 5, name: 'Company E', link: '#' },
    { id: 6, name: 'Company F', link: '#' },
    { id: 7, name: 'Company Z', link: '#' },
    { id: 8, name: 'Company Y', link: '#' },
  ];

  const originalList = phonebookList.slice(0, 4);

  const resetList = () => {
    setShowMore(false);
  };
 
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="content">
        <div className="links">
          <Link to="/">{t("home")}</Link>
          <Link to="./Aboutus.js">{t("about_us")}</Link>
          <Link to="./Contactus.js">{t("contact")}</Link>
          <Link to="./Aboutus.js">{t("faq")}</Link>
          <Link to="./PostTender.js">{t("post_tender")}</Link>
          

        </div>
        <div className="phonebook">
          <h3>{t("phonebook")}</h3>
          <ul>
            {phonebookList.slice(0, showMore ? phonebookList.length : 4).map((company) => (
              <li key={company.id}>
                <a href={company.link}>{company.name}</a>
              </li>
            ))}
            {!showMore && (
              <li>
                <button onClick={toggleShowMore}>{t("show_more")}</button>
              </li>
            )}
            {showMore && (
              <li>
                <button onClick={resetList}>{t("see_less")}</button>
              </li>
            )}
          </ul>
        </div>
        <div className="subscribe">
          <h3>{t("subscribe")}</h3>
          <p>{t("subscribe_below")}</p>
          <form>
            <input type="email" placeholder={t("enter_email")} />
            <button type="submit">{t("subscribe")}</button>
          </form>
        </div>
        <div className="social-media">
          <h3>{t("follow_us")}</h3>
          <ul>
            <li><a href="#">< FaFacebook/> </a></li>
            <li><a href="#"> <FaTwitter/></a></li>
            <li><a href="#"><FaInstagram/></a></li>
            <li><a href="#"><FaLinkedin/></a></li>
          </ul>
         
        </div>
          
        
      </div>
      <div className='mss'>
      <p>&copy; Micro Sun &amp; Solution {currentYear}, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
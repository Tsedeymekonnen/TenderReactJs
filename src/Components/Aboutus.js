import "./Aboutus.css";
import React, { useState } from 'react';
import {BsFillQuestionCircleFill } from 'react-icons/bs';
import aboutus from "../images/aboutus.svg"
import { useTranslation, initReactI18next } from "react-i18next";

import { Link } from 'react-router-dom';

function Faq() {
  const {t} = useTranslation()
 
  const faqs = [
    {
      id: 1,
      image: require("../images/mission.svg"),
      question: 'What is Yor Mission?',
      answer: 'Our Mission is to achieve the reputation of a quality, high standard & reliable solution & service Provider Company in the ICT industry.'
    },
    {
      id: 2,
      image: require("../images/vision.svg"),
      question: 'What is Your Vision?',
      answer: 'Our Vision is to achieve 100% customer satisfaction by delivering quality products and services at an affordable cost. Our forward vision is to strive to become an entity in technology based corporate solutions, capable of demanding unconditional response from the targeted niche. We also believe that for our scope of improvisation – sky is the limit and we are always ready to take our achievements to the next level. We are growing and would always like to remain on the growing streak.'
    },
    {
      id: 3,
      image: require("../images/location.svg"),
      question: 'Where is Your Location?',
      answer: 'Our Location is Addis Ababa Ethiopia. on bole road.'
    },
    {
      id: 4,
      image: require("../images/customers.svg"),
      question: 'Your Customers?',
      answer: 'We have more than 100 Customer.'
    }
 
  ];

 
  
  return (
  <div className="faq-container" id="faq">
    <h3>&mdash;&nbsp;{t("faq")}&nbsp;&mdash;</h3>
    <div className="faq">
    
      {faqs.map((faq) => (
        <div key={faq.id} className="faq__card">
          
          <div className="faq__content">
           <div className="title">
          <img src={faq.image} alt="FAQ" className="faq__image" />
            <h4>{faq.question}</h4>
          </div>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>  
  );
}


function Aboutus() {
  const {t} = useTranslation()
  return (
 
    <div className="pagecontainer">
      <div className="about-us">
      <img src={aboutus} className="about-us__image" alt="logo" />
      <div className="about-us__content">
        <h3>ABOUT US</h3>

        <p>Micro sun and Solutions plc have been formed by two individual professionals having vivid
           experience and wide exposure in Information Technology. People involved here are also young,
            qualified business graduates and qualified engineers from the renowned universities across the globe.
            MSS began its business operation as a hardware and network solutions providing company in January 1997.
    MSS provides one stop automated solution for your trade and industry.
           Depending on the size and field of your organization, we have different products
            and services to meet your requirements. We provide the optimum and customized
             solutions made for your organization.
     
            MSS provides one stop automated solution for your trade and industry. Depending on the 
            size and field of your organization, we have different products and services to meet your
            requirements. We provide the optimum and customized solutions made for your organization.</p>
            <Link to="/Contactus.js">                
                  <span>{t("contact")}</span>
                </Link>
        
 
        </div> 
      </div>
    
      <Faq/>
    </div>
  
  );
}

export default Aboutus;
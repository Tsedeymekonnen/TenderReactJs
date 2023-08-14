import React, { useState } from 'react';
import './Contactus.css';
import {ImLocation } from 'react-icons/im';
import { BsMailbox } from 'react-icons/bs';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { MdOutlineFax } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import contact from "../images/contactus.svg"
import { useTranslation, initReactI18next } from "react-i18next";

function Contactus() {

  const {t} = useTranslation()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, message };
    fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSuccessMessage('Your message has been sent. We will get back to you as soon as possible.');
        } else {
          setErrorMessage('An error occurred while sending your message. Please try again later.');
        }
      })
      .catch(error => {
        setErrorMessage('An error occurred while sending your message. Please try again later.');
      });
  };

  return (

    <div className='allpage'> 
      <img src={contact} alt="contact" className="contact-image" />
    <div className="contact-us">
      
      <div className="contact-info">
        <h2>{t("contact_info")}</h2>
        <p><ImLocation className="icon" size="25px"/>&nbsp;&nbsp;&nbsp;{t("location")}</p>
        <p><BsMailbox  className="icon" size="25px"/>&nbsp;&nbsp;&nbsp;{t("po_box")}: 100074</p>
        <p><BsFillTelephonePlusFill  className="icon" size="25px"/>&nbsp;&nbsp;&nbsp; +251-911-20-26-11</p>
        <p><MdOutlineFax className="icon" size="25px"/>&nbsp;&nbsp;&nbsp;{t("fax")}: +251-1-15-51-33-54</p>
        <p><BsFillTelephonePlusFill className="icon" size="25px"/>&nbsp;&nbsp;&nbsp;{t("technical_support")}: 6949</p>
        <p><MdEmail  className="icon" size="25px"/>&nbsp;&nbsp;&nbsp;support@mssmea.com</p>
      </div>

      <div className="contact-form">
        <h2>{t("contact")}</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t("name")}:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("email")}:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("message")}:</label>
            <textarea id="message" name="message" value={message} onChange={handleMessageChange} required />
          </div>
          <button type="submit">{t("send")}</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Contactus;
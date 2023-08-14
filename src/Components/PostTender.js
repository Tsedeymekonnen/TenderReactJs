import { useState } from 'react';
import React from 'react';
import './PostTender.css';
import Tenderimage from  '../images/tender-icon.svg';
import { useTranslation, initReactI18next } from "react-i18next";

export const PostTender = () => {

  const {t} = useTranslation()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    deadline: '',
    attachments: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="tender-form-container">

      <form className="tender-form" onSubmit={handleSubmit}>
        <h2 className="form-title">{t("post_tender")} &nbsp;&nbsp; </h2>
        
        <div className="form-group">
          <label htmlFor="title" ></label>
          <input type="text" id="title" placeholder={t("title")}  name="title" value={formData.title} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description" ></label>
          <textarea id="description" placeholder={t("description")}  name="description" value={formData.description} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category"  ></label>
          <input type="text" id="category" placeholder={t("category")}  name="category" value={formData.category} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="deadline" >{t("starting_date")}</label>
          <input type="date" id="deadline" placeholder={t("starting_date")}  name="deadline" value={formData.deadline} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="deadline" >{t("ending_date")}</label>
          <input type="date" id="deadline" placeholder={t("ending_date")}  name="deadline" value={formData.deadline} onChange={handleInputChange} />
        </div>
        
        
        <button type="submit" className="submit-button">{t("post")}</button>
      </form>
      <img src={Tenderimage} className="tender__image" alt="logo" />
      
    </div>
  );
};

export default PostTender;
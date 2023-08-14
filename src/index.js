import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Suspense } from 'react';


import i18next from "./i18n.js";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


const loadingMarkup =(
  <div className="py-4 text-center">
    <h2>Loading..</h2>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>

        <App/>
      
      </React.StrictMode>
      </Suspense>
);

reportWebVitals();

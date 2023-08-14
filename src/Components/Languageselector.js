import React, { Component }  from 'react';
import i18n, { use } from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const languages= [{
    code:'am',
    name: 'Amharic',
   
  },
  
  {
    code:'en',
    name: 'English',
   
  },

  {
    code:'or',
    name: 'Oromifa',
 
  }
  ]

function Languageselector(){
  const {t} = useTranslation()
 
    return(
        <div>

        <div class="btn-group">
  <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  {t("language")}
  </button>
  <ul class="dropdown-menu">
  {
        languages.map(({code,name}) => ( 
          <li key={code}><button class="dropdown-item" onClick={()=>i18n.changeLanguage(code) } >
       {name}</button></li>
        
        ))}
  </ul>
</div>

        
        </div>

        
        
    )
}

export default Languageselector;
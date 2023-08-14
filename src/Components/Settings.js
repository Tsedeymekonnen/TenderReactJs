import React from 'react';
import DarkMode from './DarkMode.js';
import Css from './Settings.css'
import Languageselector from './Languageselector.js'
import { useTranslation, initReactI18next } from "react-i18next";


function Settings(){
  const {t} = useTranslation()
    return(
  <div className='setting-container'>
    
    <ul className='list'>
         <h3>{t("settings")}</h3>
        <li>  {t("change_theme")} <DarkMode/></li><hr/>
        <li>{t("language")}</li> <Languageselector/><hr/>
        
    </ul>
   
    <br/>
   
  </div>
 

    )


}

export default Settings;

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','fr','am', 'or'],
  
    fallbackLng: "en",
    detection:{
      order: ['cookie','htmlTag','querystring',  'localStorage', 'path', 'subdomain'],
      caches: ['cookie']

    },
    backend: {
      loadPath: '/assets/{{lng}}/translation.json',
    },
   


  });

  export default i18n;
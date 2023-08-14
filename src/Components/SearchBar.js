import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useEffect } from 'react';
import Searchbar from "./SearchBar.css"
import { useTranslation, initReactI18next } from "react-i18next";

function SearchBar(props) {
  const {t} = useTranslation()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [query, setQuery] = useState('');

  function handleInputChange(event) {
    setQuery(event.target.value);
    props.onSearch(event.target.value);
  }

  return (
    <div className="search-bar">
       
 
    <div>
        <input type="text" placeholder={t("search_tender")} value={query} onChange={handleInputChange} />
    
    </div>

                
              
    </div>
  );
}

export default SearchBar;
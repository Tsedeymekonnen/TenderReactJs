import React, { useState } from 'react';
import data from '../tendersData.json';
import './Home.css';
import { FaSearch } from 'react-icons/fa';
import Searchbar from "./SearchBar.js"
import { useTranslation, initReactI18next } from "react-i18next";

function TenderCard(props) {

  const { title, description, deadline,contact, eligibilityCriteria, submissionProcess, evaluationProcess, additionalInformation } = props.tender;
  const [showDetails, setShowDetails] = useState(false);

  function handleButtonClick() {
    setShowDetails(!showDetails);
  }
    

         return (
              <div className="card">
                
                  <h4 className='title'> {title}</h4>
                  <hr/>
                  <p className='description'> {description}</p>
                  <p className='deadline' >Deadline: {deadline}</p>
                  {showDetails ? (
                    <>
                      <p >Eligibility Criteria: {eligibilityCriteria}</p>
                      <p >Submission Process: {submissionProcess}</p>
                      <p>Evaluation Process: {evaluationProcess}</p>
                      
                      <p>Contact Info:  {contact.name}, Email: {contact.email}, Phone No:{contact.phone}</p>
                      <p >Additional Information: {additionalInformation}</p>
                      <button className="btn2 " onClick={handleButtonClick}>Hide Details</button>
                    </>
                  ) : (
                    <button className="btn2" onClick={handleButtonClick}>Open</button>
                  )}
                
              </div>
            );
          }

          function TendersList() {
            const {t} = useTranslation()
            return (
             <div className="tenders-list">
                <div className="ad-container">
                <div className='ad1'>
                <img src="https://via.placeholder.com/200x350" alt="Ad Placeholder" />
                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1386308267148525" crossorigin="anonymous"></script>
                   <ins className="adsbygoogle"
                       data-ad-client="ca-pub-1386308267148525"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              <script>
              (window.adsbygoogle = window.adsbygoogle || []).push({ });
              </script>
              <br/>
                </div>
                  <div className='ad2'>
                    <img src="https://via.placeholder.com/200x350" alt="Ad Placeholder" />
                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1386308267148525" crossorigin="anonymous"></script>
                   <ins className="adsbygoogle"
                       data-ad-client="ca-pub-1386308267148525"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              <script>
              (window.adsbygoogle = window.adsbygoogle || []).push({ });
              </script></div>
              
                </div>
               
                <div className="tenders-container">
                <Searchbar className="search-bar"/>
                  {data.tenders.map((tender, index) => (
                    <div key={index} className="card-wrapper">
                      <TenderCard tender={tender} />
                    </div>
                  ))}
                </div>

                <div className="ad-container">
                <div className='ad1'>
                <img src="https://via.placeholder.com/200x350" alt="Ad Placeholder" />
                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1386308267148525" crossorigin="anonymous"></script>
                   <ins className="adsbygoogle"
                       data-ad-client="ca-pub-1386308267148525"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              <script>
              (window.adsbygoogle = window.adsbygoogle || []).push({ });
              </script>
              <br/>
                </div>
                  <div className='ad2'>
                    <img src="https://via.placeholder.com/200x350" alt="Ad Placeholder" />
                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1386308267148525" crossorigin="anonymous"></script>
                   <ins className="adsbygoogle"
                       data-ad-client="ca-pub-1386308267148525"
                       data-ad-format="auto"
                       data-full-width-responsive="true"></ins>
              <script>
              (window.adsbygoogle = window.adsbygoogle || []).push({ });
              </script></div>
              
                </div>

              </div>
            );
          }

          export default TendersList;
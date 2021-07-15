import React from 'react';
import logoMale from '../../Photo/male.png';
import logoFemale from "../../Photo/female.png" 
import leagueLogo from '../../Leauge Logo/image 1.png'
import genderLogo from '../../Icon/male-gender-sign 1.png'
import twitter from '../../Icon/Twitter.png'
import facebook from '../../Icon/Facebook.png'
import youtube from '../../Icon/YouTube.png'

import './TeamDetails.css'
const TeamDetails = (props) => {
    const {strGender,strDescriptionEN,strCountry,strAlternate,idTeam}=props.team
//  let gender = strGender;
    var conditionalImage;
    if(strGender==="Male"){
        conditionalImage=<img className="img" width="400px" height="260px" src={logoMale} alt ='male' />
    }else{
        conditionalImage=<img className="img" width="200px" height="200px" src={logoFemale} alt="female" />
    }

    return (
        <div className="home-page">

            <div className="first-section">
              <img src={leagueLogo} width="100px" alt="" srcset="" />
            </div>
            <div className="second-section">
                <div className="second-inner">
                    <div className="child-inner">
                        <h1>Our Team Information</h1>
                        <p>Team Id : {idTeam}</p>
                        <p>Country name : {strCountry}</p>
                        <p>Club name : {strAlternate}</p>
                      
                        <p><img src={genderLogo} width="16px" height="16px" alt="" srcset="" /> Gender : {strGender}</p>  
                    </div>
                    <p>{conditionalImage}</p>
                </div>
                <div className="footer-section">
                    <p>team-description: {strDescriptionEN}</p>
                    <a href="https://www.linkedin.com/in/tapu-chandra-mojumder-24283720a/"><img src={twitter} width="40px" height="40px" alt="twitter" srcset="" /></a>
                    <a href="https://www.facebook.com/tapu.mojumder.3"> <img src={facebook} width="40px" height="40px" alt="facebook" srcset="" /></a>
                    <a href="https://www.example.com/"><img src={youtube} width="40px" height="40px" alt="youtube" srcset="" /></a>
                    
                   
                    
                </div>
            </div>
          
            
        </div>
    );
};

export default TeamDetails;
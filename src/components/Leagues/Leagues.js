import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import './Leagues.css'

const Leagues = (props) => {
  console.log(props.league)
    const {strTeamBadge,idTeam,strLeague,strAlternate}=props.league

      
         let history = useHistory()
          const showLeaglueDetails=(idTeam)=>{
          
            history.push(`/team/${idTeam}`)
          }
    return (
        <div className="box">
           <div className="inner-box">
           <img src={strTeamBadge} alt="club-logo" style={{height:"100px"}} srcset="" />
         
            <p>Club Name: {strAlternate}</p>
            <p>Name Of Leagues: {strLeague}</p>
            <button onClick={()=>showLeaglueDetails(idTeam)}>More-Information <FontAwesomeIcon icon= { faArrowRight} /></button>
           </div>
        </div>
    );
};

export default Leagues; 
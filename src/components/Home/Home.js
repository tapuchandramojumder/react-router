import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues'
import './Home.css'
const Home = () => {
    const [leagues,setLeagues]=useState([])
    //   const sliceLeagues=  leagues.slice(0,13)
    useEffect(()=>{
        //https://www.thesportsdb.com/api/v1/json/1/all_leagues.php
        
        fetch(' https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>console.log(setLeagues(data.teams)))
    },[])
    return (
        <div className="home-page">
           <div className="first-section">
              <h1>Sports Mania</h1>
           </div>
           <div className="second-section">
           {
                leagues.map(league=><Leagues league={league}></Leagues>)
            }  
           </div>
            
            
        </div>
    );
};

export default Home;
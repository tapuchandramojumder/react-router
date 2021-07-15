import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
 import TeamDetails from '../TeamDetails/TeamDetails'
const LeagueDetails = () => {
    const {idTeam}=useParams();
//   console.log(idTeam)
    const [leagueDetail,setLeagueDetail]=useState({})
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setLeagueDetail(data.teams[0]))
        //  console.log( leagueDetail.strTeam)
    },[idTeam])
    return (
        <div clasName="home-page">
            <TeamDetails team = {leagueDetail}></TeamDetails>
            {/* <h1>Hello I am League Details</h1>
            <p>console.log{leagueDetail.strTeam}</p>
            <p>LeagueDetails {leagueDetail.strDescriptionEN}</p> */}
        </div>
    );
};

export default LeagueDetails;
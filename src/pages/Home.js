import React, { useEffect, useState } from "react";
/* Api */
import Api from '../api/Api';
import ApiFunction from "../api/ApiFunction";
/* Components */
import TopNavBar from "../components/navigation/TopNavBar";
/* Image */
import OldGames from '../img/old-games.jpg';
import NewGames from '../img/new-games.jpg';
import { Key } from "@mui/icons-material";

const Home = () => {

    const[topGames, setTopGames] = useState([]);
    const[gamesSelected, setGamesSelected] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setTopGames(await Api.fetchGames(1, false));
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
            if(topGames.length !== 0){
                setGamesSelected(await Api.fetchGame(topGames.at(0).id));
            }
        }
        fetchData();
    }, [topGames])

    const fetchData = async (id) => {
        setGamesSelected(await Api.fetchGame(id));
    }

    return(
        <div className="home">
            <TopNavBar />
            <div className="home-hero-banner">
                <div className="top-games-container">
                    <div className="top-games-img-container" style={{backgroundImage: `url(${gamesSelected ? gamesSelected.background_image : ''})`}}>
                        <div className="top-games-img">
                            <div className="top-games-img-contents">
                                {gamesSelected &&
                                    <>
                                        <h1 className="top-games-img-title">{gamesSelected.name}</h1>
                                        <span>{ApiFunction.desc(gamesSelected.description, 290)}</span>
                                    </>     
                                }
                            </div>
                        </div>
                    </div>
                    <div className="top-games-choose-container">
                        {ApiFunction.bestGames(topGames, 5).map((d, idx) => {    
                            return(
                                <div className="top-games-choose"  key={idx}>
                                    {gamesSelected &&
                                        <>
                                            {idx != 4 
                                            ?   <div style={{padding: `${d.id === gamesSelected.id ? '12px' : ''}`}} onClick={() => fetchData(d.id)}><span>{d.name}</span></div>
                                            :   <div style={{padding: `${d.id === gamesSelected.id ? '12px' : ''}`, border: 'none'}} onClick={() => fetchData(d.id)}><span>{d.name}</span></div>}
                                        </>
                                                                         
                                    }
                                </div>  
                            )
                        })}
                    </div>
                </div>
                <div className="new-old-games-container">
                    <div className="new-old-games" style={{backgroundImage: `url(${OldGames})`}}>
                        <div className="">
                            Old Games
                        </div>
                    </div>
                    <div className="new-old-games" style={{backgroundImage: `url(${NewGames})`}}>
                        <div className="">
                            New Games
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Home;
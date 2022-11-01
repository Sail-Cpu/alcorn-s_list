import React, { useEffect, useState, useContext } from "react";
/* Context */
import { GameListContext } from '../context/request/GameList'
/* Components */
import TopProduct from "../components/product/TopProduct";
/* Img */
import HeroBannerImg from '../img/hero-banner.jpg';
/* Icon */
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Games } from "@mui/icons-material";

const API_KEY = "a1967dd890794d25a8a05a8909f92e7d";



const Home = () => {
    
    const {data, bestGames} = useContext(GameListContext);

    console.log(bestGames(8));
    
    return(
        <div className="home">
            <img className="hero-banner-img" src={HeroBannerImg} />
            <div className="hero-banner-container">
                <div className="hero-banner">
                    <h1>Find your game tournament here!</h1>
                    <h2>Over 100 tournament &  event waiting you to join in</h2>
                </div>
               <button>Join Tournament</button>
               <div className="arrow-box">
                    <ArrowDownwardIcon className="arrow" />
               </div>
               <div className="best-games-container">
                    {bestGames(8).map(d => {
                        return(
                            <TopProduct name={d.name} />
                        )
                    })}
               </div>
            </div>
        </div>
    )
}

export default Home;
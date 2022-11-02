import React, { useEffect, useState, useContext } from "react";
/* Api */
import Api from '../api/Api';
/* Components */
import TopProduct from "../components/product/TopProduct";
/* Img */
import HeroBannerImg from '../img/hero-banner.jpg';
/* Icon */
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const API_KEY = "a1967dd890794d25a8a05a8909f92e7d";

const Home = () => {

    const[topGames, setTopGames] = useState([]);
    const[dev, setdev] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            setTopGames(await Api.fetchGames(1, false));
        }
        fetchData();
    }, [])

    const bestGames = (nb) => {
        let data = [];
        if(topGames.length != 0){
            for (let i = 0; i < nb; i++) {
                data.push(topGames.at(i));
            }
            return data;
        }
        return [];
    }

    useEffect(() => {
        const fetchData = async () => {
            setdev(await Api.fetchGameByDeveloper(1, "ubisoft"))
        }
        fetchData();
    }, [])

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
                            <TopProduct key={d.id} name={d.name} />
                        )
                    })}
               </div>
            </div>
        </div>
    )
}

export default Home;
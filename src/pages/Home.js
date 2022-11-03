import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Api */
import Api from '../api/Api';
import ApiFunction from "../api/ApiFunction";
/* Components */
import TopNavBar from "../components/navigation/TopNavBar";
import Category from "../components/Category";
/* Image */
import OldGames from '../img/old-games.jpg';
import NewGames from '../img/new-games.jpg';
/* Icon */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

    const[topGames, setTopGames] = useState([]);
    const[selectedGames, setSelectedGames] = useState();
    const[allGenres, setAllGenres] = useState([]);

    /* Fetch Games */
    useEffect(() => {
        const fetchData = async () => {
            setTopGames(await Api.fetchGames(1, false));
        }
        fetchData();
    }, [])
    
    /* Fetch Selected Game */
    useEffect(() => {
        const fetchData = async () => {
            if(topGames.length !== 0){
                setSelectedGames(await Api.fetchGame(topGames.at(0).id));
            }
        }
        fetchData();
    }, [topGames])

    useEffect(() => {
        const fetchData = async () => {
                setAllGenres(await Api.fetchGenres());
        }
        fetchData();
    }, [])

    /* Fetch Selected Game */
    const fetchData = async (id) => {
        setSelectedGames(await Api.fetchGame(id));
    }

    console.log(selectedGames)

    return(
        <div className="page home">
            <TopNavBar />
            <div className="home-hero-banner">
                <div className="top-games-container">
                    <div className="top-games-img-container" style={{backgroundImage: `url(${selectedGames ? selectedGames.background_image : ''})`}}>
                        <div className="top-games-img">
                            <div className="top-games-img-contents">
                                {selectedGames &&
                                    <>
                                        <h1 className="top-games-img-title">{selectedGames.name}</h1>
                                        <span>{ApiFunction.desc(selectedGames.description, 290)}</span>
                                    </>     
                                }
                            </div>
                        </div>
                    </div>
                    <div className="top-games-choose-container">
                        {ApiFunction.bestGames(topGames, 5).map((d, idx) => {    
                            return(
                                <div className="top-games-choose" style={{border: `${idx !== 4 ? '' : 'none'}`}}  key={idx}>
                                    {selectedGames &&
                                        <>
                                             <div style={{padding: `${d.id === selectedGames.id ? '12px' : ''}`}} onClick={() => fetchData(d.id)}><span>{d.name}</span></div>
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
            <div className="home-category-container">
                <div className="home-category">
                    {ApiFunction.bestGames(allGenres, 5).map((genre, idx) => {
                        return(
                            <Category key={idx} name={genre.name} image={genre.image_background}/>
                        )
                    })}
                </div>
                <div className="home-all-category">
                   <Link to="/genres"><ArrowForwardIcon /></Link> 
                </div>
            </div>
        </div>
    )
}

export default Home;
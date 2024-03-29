import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Api */
import Api from '../api/Api';
import ApiFunction from "../api/function/ApiFunction";
/* Components */
import TopNavBar from "../components/navigation/TopNavBar";
import Category from "../components/Category";
/* Image */
import OldGames from '../img/old-games.jpg';
import NewGames from '../img/new-games.jpg';
/* Icon */
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Loading from "../components/other/Loading";

const Home = () => {

    const[topGames, setTopGames] = useState([]);
    const[selectedGames, setSelectedGames] = useState();
    const[allGenres, setAllGenres] = useState([]);
    const[loading, setLoading] = useState(false);

    /* Fetch Games */
    useEffect(() => {
        setLoading(true);
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
                setAllGenres(await Api.fetchGenres());
                setTimeout(() => {
                    setLoading(false)
                }, 1500)
            }
        }
        fetchData();
    }, [topGames])

    /* Fetch Selected Game */
    const fetchData = async (id) => {
        setSelectedGames(await Api.fetchGame(id));
    }
    
    return(
        <div className="page home">
            <TopNavBar />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <div className="home-hero-banner">
                        <div className="top-games-container">
                            <div className="top-games-img-container" style={{backgroundImage: `url(${selectedGames ? selectedGames.background_image : ''})`}}>
                                <div className="top-games-img">
                                    <div className="top-games-img-contents">
                                        {selectedGames &&
                                            <>
                                                <h1 className="top-games-img-title">{selectedGames.name}</h1>
                                                <span>{ApiFunction.desc(selectedGames.description_raw, 290)}</span>
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
                            <Link className="new-old-games" to={`/new-old/old`} style={{backgroundImage: `url(${OldGames})`}}>
                                <div>
                                    Old Games
                                </div>
                            </Link>
                            <Link className="new-old-games" to={`/new-old/new`} style={{backgroundImage: `url(${NewGames})`}}>
                                <div>
                                    New Games
                                </div>
                            </Link>
                        </div>
                    </div>   
                    <div className="home-category-container">
                        <div className="home-category">
                            {ApiFunction.bestGames(allGenres, 5).map((genre, idx) => {
                                return(
                                    <Category key={idx} name={genre.slug} image={genre.image_background} type={"genre"}/>
                                )
                            })}
                        </div>
                        <div className="home-all-category">
                        <Link to="/genres"><ArrowForwardIcon /></Link> 
                        </div>
                    </div>
                </>
            )
            
            }
            
        </div>
    )
}

export default Home;
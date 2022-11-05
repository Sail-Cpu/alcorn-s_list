import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
/* Api */
import Api from '../../api/Api'
import ApiFunction from "../../api/function/ApiFunction";
/* Components */
import TopNavBar from "../navigation/TopNavBar";
import Loading from "../other/Loading";

const GameDetails = () => {

    const{id} = useParams();
    const[allData, setAllData] = useState();
    const[loading, setLoading] = useState(false);

    const[screen, setScreen] = useState();
    const[trailers, setTrailers] = useState();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setAllData(await Api.fetchGame(id));
            setScreen(await Api.fetchScreenshot(id));
            setTrailers(await Api.fetchTrailers(id))
            setLoading(false);
        }
        fetchData();
    }, [])

    if(trailers){
        console.log(trailers)
    }
    
    return(
        <div className="page game-details-container">
            <TopNavBar />
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {allData && 
                            <div className="game-details">
                                <div className="game-details-hero-banner-container" style={{backgroundImage: `url(${allData.background_image})`}}>
                                    <div className="game-details-hero-banner">
                                        <div className="game-details-hero-banner-left">
                                            <div className="game-details-hero-banner-title-container" >
                                                <span className="game-developer" style={{fontSize: '18px', color: '#c5c5c5'}}>{allData.developers.length > 0 ? allData.developers?.[0].name : ""}</span>
                                                <span className="game-title" style={{fontSize: '55px', fontWeight: '600'}}>{allData.name}</span>
                                                {ApiFunction.rating(allData.metacritic)}
                                            </div>
                                            <div className="game-details-hero-banner-release-container" style={{fontSize: '20px'}}>{allData.released}</div>
                                        </div>
                                        <div className="game-details-hero-banner-right">{ApiFunction.desc(allData.description_raw, 1440)}</div>
                                    </div>
                                </div>
                                <div className="game-details-screens-container">      
                                    {ApiFunction.bestGames(screen, 3).map(s => {
                                        return(
                                            <div key={s.id} className="game-details-screens">
                                                <div style={{backgroundImage: `url(${s.image})`}}></div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                                {trailers.length > 0 &&
                                    <div className="game-details-trailers-container">
                                        <div className="game-details-trailers">
                                            <ReactPlayer  url={trailers?.[0].data.max} controls width="100%" height="100"></ReactPlayer>
                                        </div>
                                            
                                    </div>
                                }
                                
                            </div>
                        }
                    </> 
                    )
                }
                
        </div>
    )
}

export default GameDetails;
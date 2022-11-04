import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* Api */
import Api from '../../api/Api'
import ApiFunction from "../../api/function/ApiFunction";
/* Components */
import TopNavBar from "../navigation/TopNavBar";
import Loading from "../other/Loading";

const GameDetails = () => {

    const{id} = useParams();
    const[allData, setAllData] = useState()
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            setAllData(await Api.fetchGame(id));
            setLoading(false);
        }
        fetchData();
    }, [])
    
    return(
        <div className="page game-details-container">
            <TopNavBar />
                <div className="game-details">
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                        {allData && 
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
                        }
                        </> 
                    )
                }
                </div>
        </div>
    )
}

export default GameDetails;
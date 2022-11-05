import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Game from "../../components/game/Game";
import Loading from "../../components/other/Loading";
import { Gavel } from "@mui/icons-material";

const Games = () => {

    const{type, typeName} = useParams();
    const[allGames, setAllGames] = useState([]);
    const[data, setData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            if(type === "genre"){
                setData(await Api.fetchGenre(typeName));
            }else if(type === "developer"){
                setData(await Api.fetchDeveloper(typeName));
            }else{
                setData(await Api.fetchPlatform(typeName));
            }
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            if(data){
                if(type === "genre"){
                    setAllGames(await Api.fetchGamesByGenre(1, typeName));
                }else if(type === "developer"){
                    setAllGames(await Api.fetchGamesByDeveloper(1, typeName));
                }else{
                    setAllGames(await Api.fetchGamesByPlatform(1, data.id));
                }    
            }
                  
        }
        fetchData();
    }, [data])

    return(
        <div className="page all-games-container">
            <TopNavBar />
            {loading ? (
                <Loading />
            ) : (
                    <div className="games-container">
                        {data &&
                            <> 
                                <div className="games-title-container" style={{backgroundImage: `url(${data.image_background})`}}>
                                    <div>
                                        <span>{data.name}</span>
                                    </div>
                                </div>
                                <div className="all-games-container">
                                    {allGames.map((game) => {
                                        return(
                                            <Game key={game.id} id={game.id} name={game.name} image={game.background_image} metacritic={game.metacritic} dev={game.developers}/>
                                        )                            
                                    })} 
                                </div> 
                            </>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Games;
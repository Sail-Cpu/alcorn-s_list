import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* Api */
import Api from '../../api/Api';
/* Components */
import TopNavBar from "../../components/navigation/TopNavBar";
import Game from "../../components/game/Game";
import Loading from "../../components/other/Loading";

const NewOld = () => {

    const{name} = useParams();
    const[allGames, setAllGames] = useState([]);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            if(name == "new"){
                setAllGames(await Api.fetchGamesByRelease(1, true))
            }else{
                setAllGames(await Api.fetchGamesByRelease(1, false))
            }   
            setLoading(false)
        }
        fetchData();
    }, [])

    return(
        <div className="page new-old-container">
            <TopNavBar />
            {loading ? (
                    <Loading />
                ) : (
                    <div className="all-categories">
                        {allGames.map(game => {
                            return(
                                <Game id={game.id} name={game.name} image={game.background_image} metacritic={game.metacritic} dev={game.developers}/>
                            )
                        })}
                    </div>
                )
            }
            
        </div>
    )
}

export default NewOld;
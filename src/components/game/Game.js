import React, { useEffect, useState } from "react";
import Api from '../../api/Api'

const Game = (props) => {

    const[game, setGame] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setGame(await Api.fetchGame(props.id))
        }
        fetchData();
    }, [])

    function rating(nb){
        if(nb >= 80){
            return <span style={{color: `green`}}>{(nb/10).toFixed(1)}</span>
        }else if(nb < 80 && nb > 50){
            return <span style={{color: `orange`}}>{(nb/10).toFixed(1)}</span>
        }
        return <span style={{color: `red`}}>{(nb/10).toFixed(1)}</span>
    }

    return(
        <div className="game-container">
            <div className="game">
                <div className="game-info-container">
                    <div className="game-img" style={{backgroundImage: `url(${props.image})`}}></div>
                    <div className="game-info">
                        <p>{props.name}</p>
                        <p style={{fontSize: '14px', color: 'rgb(160, 160, 160)'}}>{game.developers?.[0].name}</p>
                    </div>
                </div>
                <div className="game-button-container">
                    {rating(props.metacritic)}
                    <button>See More</button>
                </div>
            </div>
        </div>
    )
}

export default Game;
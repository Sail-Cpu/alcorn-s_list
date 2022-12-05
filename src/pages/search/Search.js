import React, { useEffect, useState } from "react";
/* Api */
import Api from '../../api/Api'
/* Components */
import Game from '../../components/game/Game';
/* Img */
import SearchImg from '../../img/search.jpg';

const Search = () => {

    const[data, setData] = useState();
    const[inputValue, setInputValue] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setData(await Api.fetchGamesBySearch(inputValue))
        }
        fetchData();
    }, [inputValue])

    console.log(data);

    return(
        <div className="page">
            {data && 
                <>
                    <div className="search-container" style={{backgroundImage: `url(${SearchImg})`}}>
                        <div>
                            <input type="text" autoFocus onChange={e => setInputValue(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="all-games-container">
                        {data.map((game) => {
                            return(
                                <Game id={game.id} name={game.name} image={game.background_image} metacritic={game.metacritic} dev={game.developers}/>
                            )                            
                        })} 
                    </div>
                </>       
            }
        </div>
    )
}

export default Search;
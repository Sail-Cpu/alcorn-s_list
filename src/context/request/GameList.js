import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const API_KEY = "a1967dd890794d25a8a05a8909f92e7d";

export const GameListContext = createContext();

export function GameListProvider(props) {
    const[data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let result;
            let datas = [];
            for(let i = 1; i < 2; i++){
                result = await axios(
                    `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
                )
                datas.push(result.data.results)
            }  
            for(let i = 0; i < datas.length; i++){
                for(let j = 0; j < datas[i].length; j++){
                    setData(data => [...data, datas[i][j]]);
                }
            }
        }
        fetchData();
    }, []) 

    const bestGames = (nb) => {
        console.log(data)
        let dats = [];
        if(data.length != 0){
            data.sort(function(a, b) {
                return b.metacritic - a.metacritic;
            });
            for (let i = 0; i < nb; i++) {
                dats.push(data.at(i));
            }
            console.log(data)
            return dats;
        } 
        return [];
    }

    return(
        <GameListContext.Provider value={{data, bestGames}}>
            {props.children}
        </GameListContext.Provider>
    )
}
import React from "react";
import axios from "axios";
/* Api config */
import { API_URL, API_KEY } from './config';

const apiSettings = {
    fetchGames: async (page, best) => {
        const endpoint = best
            ? `${API_URL}games?key=${API_KEY}&page=${page}&ordering=-metacritic`
            : `${API_URL}games?key=${API_KEY}&page=${page}`;
        return await (await axios(endpoint)).data.results;
    },
    fetchGame: async (id) => {
        const endpoint = `${API_URL}games/${id}?key=${API_KEY}`
        return await (await axios(endpoint)).data;
    },
    fetchGamesByGenre: async (page, genre) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&page=${page}&genres=${genre}`
        return await (await axios(endpoint)).data.results;
    },
    fetchGameByDeveloper: async (page, developer) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&page=${page}&developers=${developer}`
        return await (await axios(endpoint)).data.results;
    }
}

export default apiSettings;
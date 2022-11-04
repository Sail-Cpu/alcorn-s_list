import axios from "axios";
/* Api config */
import { API_URL, API_KEY } from './config/config';

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
    fetchGenre: async (id) => {
        const endpoint = `${API_URL}genres/${id}?key=${API_KEY}`
        return await (await axios(endpoint)).data;
    },
    fetchDeveloper: async (id) => {
        const endpoint = `${API_URL}developers/${id}?key=${API_KEY}`
        return await (await axios(endpoint)).data;
    },
    fetchPlatform: async (id) => {
        const endpoint = `${API_URL}platforms/${id}?key=${API_KEY}`
        return await (await axios(endpoint)).data;
    },
    fetchGamesByGenre: async (page, genre) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&page=${page}&genres=${genre}`
        return await (await axios(endpoint)).data.results;
    },
    fetchGamesByDeveloper: async (page, developer) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&page=${page}&developers=${developer}`
        return await (await axios(endpoint)).data.results;
    },
    fetchGamesByPlatform: async (page, platform) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&page=${page}&platforms=${platform}`
        return await (await axios(endpoint)).data.results;
    },
    fetchGamesBySearch: async (search) => {
        const endpoint = `${API_URL}games?key=${API_KEY}&search=${search}`
        return await (await axios(endpoint)).data.results;
    },
    fetchGenres: async () => {
        const endpoint = `${API_URL}genres?key=${API_KEY}`
        return await (await axios(endpoint)).data.results;
    },
    fetchDevelopers: async () => {
        const endpoint = `${API_URL}developers?key=${API_KEY}`
        return await (await axios(endpoint)).data.results;
    },
    fetchPlatforms: async () => {
        const endpoint = `${API_URL}platforms?key=${API_KEY}`
        return await (await axios(endpoint)).data.results;
    }
}

export default apiSettings;
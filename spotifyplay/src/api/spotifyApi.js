import axiosApiInstance from './axiosConfig.js'
import axios from 'axios';


export const getPlaylist = async () => {
    return axiosApiInstance.get('https://api.spotify.com/v1/me/playlists')
        .then(res => res.data.items)
}

export const searchItems = async () =>{
    return axiosApiInstance.get(`https://api.spotify.com/v1/search?q=nanpa&type=artist`)
        .then(res => res.data.artists.items)
}

export const loginSpotify = async(code) =>{
    const url = `http://localhost:3001/callback?code=${code}`;
    console.log('estoy logeandome')
    return axios.get(url)
        .then(res => res.data)
        .catch(e => console.error('Estoy logeando desde el server', e))

}

export const getRefresh_token = async (refresh_token) => {
    console.log('Refreseando el token')
    const url = `http://localhost:3001/refresh_token?refresh_token=${refresh_token}`;
    return axios.get(url)
        .then(res => res.data );
}


export const getTopArtist = async() =>{
    const url = 'https://api.spotify.com/v1/me/top/artists'
    return axiosApiInstance.get(url)
        .then(res => console.log(res.data))
}
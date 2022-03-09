import axiosApiInstance from './axiosConfig.js'
import axios from 'axios';
// TODO: set base URL 
const SPOTY_URL = 'https://api.spotify.com/v1/'
export const getPlaylist = async () => {
    return axiosApiInstance.get(`${SPOTY_URL}me/playlists`)
        .then(res => res.data.items)
}

export const searchItems = async () =>{
    return axiosApiInstance.get(`${SPOTY_URL}search?q=nanpa&type=artist`)
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
    const url = `${SPOTY_URL}me/top/artists?limit=3`
    return axiosApiInstance.get(url)
        .then(res => res.data.items)
        .catch(e => console.error('algo paso nak, e'));
}

// const getTopTracksByArtist = async(artistId) =>{
//     const url = `${SPOTY_URL}artists/${artistId}/top-tracks?market=MX`
//     return axiosApiInstance.get(url)
//         .then(res => res.data.tracks)
//         .catch(e => console.error('por qeu fallas'))
// }

export const getTopSongsbyArtist = async (artists) =>{
    return Promise.all(artists.map((artist)=>{
        return axiosApiInstance.get(`${SPOTY_URL}artists/${artist.id}/top-tracks?market=MX`)
                    .then(tracks => tracks.data)
    }))
}
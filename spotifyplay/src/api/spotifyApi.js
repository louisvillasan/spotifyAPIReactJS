import axiosApiInstance from './axiosConfig.js'
import axios from 'axios';
// TODO: set base URL 
const SPOTY_URL = 'https://api.spotify.com/v1/'
export const getPlaylist = async () => {
    return axiosApiInstance.get(`${SPOTY_URL}me/playlists`)
        .then(res => res.data.items)
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

export const getUserData = async () =>{
    return axiosApiInstance.get(`${SPOTY_URL}me`)
        .then(res=> res.data)
}


export const getTopItems = async() =>{
    const url = `${SPOTY_URL}me/top/artists?limit=3`
    return axiosApiInstance.get(url)
        .then(res => res.data.items)
        .catch(e => console.error('algo paso nak, e'));
}

export const getTopSongsbyArtist = async (artists) =>{
    return Promise.all(artists.map((artist)=>{
        return axiosApiInstance.get(`${SPOTY_URL}artists/${artist.id}/top-tracks?market=MX`)
                    .then(tracks => tracks.data)
    }))
}


export const fetchCreatePlaylist = async ()=>{
    const {id} = await getUserData()
    const body = {
        "name": "New Playlist",
        "description": "New playlist description",
        "public": false
      }
    return axiosApiInstance.post(`${SPOTY_URL}users/${id}/playlists`, body)
        .then(res=> res.data)
}

export const fetchUpdatePlaylist = async (playlistId, tracksId) =>{
    return axiosApiInstance.put(`${SPOTY_URL}playlists/${playlistId}/tracks?uris=${tracksId}`)
        .then(res => res.data)
}


export const searchByArtistOrTrack = async (value, type) =>{
    return axiosApiInstance.get(`${SPOTY_URL}search?q=${value}&type=${type}`)
    .then(res => res.data.artists.items)
}


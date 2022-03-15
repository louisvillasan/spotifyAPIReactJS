import axiosApiInstance from './axiosConfig.js'
import axios from 'axios';
// TODO: set base URL 
const SPOTY_URL = 'https://api.spotify.com/v1/'




export const loginSpotify = async(code) =>{
    const url = `http://localhost:3001/callback?code=${code}`;
    return axios.get(url)
        .then(res => res.data)
        .catch(e => console.error('Estoy logeando desde el server', e))

}

export const getRefresh_token = async (refresh_token) => {
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

export const getTopSongsbyArtist = async () =>{
    const artists = await getTopItems();
    const songs = await Promise.all(artists.map((artist)=>{
            return axiosApiInstance.get(`${SPOTY_URL}artists/${artist.id}/top-tracks?market=MX`)
                .then(tracks => tracks.data)
    }))

    let result = []
    for (let i = 0; i < songs.length; i++) 
        for (let j = 0; j < songs[i].tracks.length; j++) 
          result.push(songs[i].tracks[j]);  
    return result  
}


// TODO: Bring more playlist;
export const getPlaylist = async () => {

    const {display_name} = await getUserData();
    console.log(display_name);
    return axiosApiInstance.get(`${SPOTY_URL}me/playlists`)
        .then(res => {
            return res.data.items.filter(playlist=>{
                return playlist.owner.id === display_name
            })
        })

    
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

export const fetchAddTrackToPlaylist = async (playlistId, trackId) => {
    return axiosApiInstance.post(`${SPOTY_URL}playlists/${playlistId}/tracks?uris=${trackId}`)
        .then(res => res.data);
}


export const searchByArtistOrTrack = async (value, type) =>{

    return (type === 'artist') 
        ?   axiosApiInstance.get(`${SPOTY_URL}search?q=${value}&type=${type}`)
                .then(res => res.data.artists.items)
        :   axiosApiInstance.get(`${SPOTY_URL}search?q=${value}&type=${type}`)
                .then(res => res.data.tracks.items)
}


export const getRecommendations = async (seedData, op) => {

    // TODO: create new file for save this algorithm on another place

    const seed_artists = seedData.filter((item) => {
        return item.type ==='artist'
    }).map((artists) => {return artists.id})
        .join(',')

    const seed_tracks = seedData.filter((item) =>{
        return item.type ==='track'
    }).map((track) => {return track.id})
    .join(',')


    const queryOp = op.map((option) => {
        return `${option.type}=${option.value}`
    }).join('&')
    
    return axiosApiInstance.get(`${SPOTY_URL}recommendations?seed_artists=${seed_artists}&seed_tracks=${seed_tracks}&${queryOp}&market=MX`)
        .then(res => res.data.tracks) 
}


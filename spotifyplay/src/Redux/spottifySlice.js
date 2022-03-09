import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopArtist, getTopSongsbyArtist} from '../api/spotifyApi'


export const setThunkPlaylist = createAsyncThunk(
  'spotify/setPlaylist',
  async (_, { dispatch}) => {
    try {
        const items = await getTopArtist();
        // console.log("🚀 ~ file: spottifySlice.js ~ line 10 ~ items", items)
        dispatch(setPlaylist(items));
    } catch (error) {
      console.error("Algo malo paso");    
    }
  }
)

export const setThunkItems = createAsyncThunk(
  'spotify/setItems',
  async (_, {dispatch}) =>{
    try{
      const artists = await getTopArtist();
      const songs = await getTopSongsbyArtist(artists);
      
      let result = []
      
      for (let i = 0; i < songs.length; i++) 
        for (let j = 0; j < songs[i].tracks.length; j++) 
          result.push(songs[i].tracks[j]);  
      
      console.log("🚀 ~ file: spottifySlice.js ~ line 29 ~ result", result)
      dispatch(setPlaylist(result));
    }catch(e){
      console.error('no se hizo la peticion')
    }
    
    

  }
)



export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    playlist: [],
  },

  reducers: {
    setPlaylist: (state,action) => {
      state.playlist = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlaylist } = spotifySlice.actions

export default spotifySlice.reducer;

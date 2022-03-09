import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getPlaylist, searchItems, getTopArtist} from '../api/spotifyApi'


export const setThunkPlaylist = createAsyncThunk(
  'spotify/setPlaylist',
  async (_, { dispatch}) => {
    try {
        const items = await getTopArtist();
        // console.log("🚀 ~ file: spottifySlice.js ~ line 10 ~ items", items)
        // dispatch(setPlaylist(items));
    } catch (error) {
      console.error("Algo malo paso");    
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTopSongsbyArtist, getRecommendations,
        fetchCreatePlaylist, fetchUpdatePlaylist} from '../api/spotifyApi'



export const setThunkItems = createAsyncThunk(
  'spotify/setItems',
  async (args,  {dispatch}) =>{
    try{

      console.log(args, 'args');
      // console.log(seedData, 'seedData')
      let items = [];
      if (args.endpoint ===  'recomendation' ){
          items = await getRecommendations(args.args[0], args.args[1]);
      }else if (args.endpoint ==='topArtistTopSongs'){
          console.log('pase');
          items = await getTopSongsbyArtist();
      }
      dispatch(setIsLoading())
    //  TODO: Do it work with the endpoint specified

    

      dispatch(setPlaylist(items));
      dispatch(setIsLoading())
 
    }catch(e){
      dispatch(setIsLoading())
      console.error('no se hizo la peticion')
    } 

  }
)


export const createPlaylist = createAsyncThunk(
  'spotify/createPlaylist',
  async (_, { dispatch, getState}) => {
    try {
        const state = getState();
        const {playlist}  = state.spotify;
        if (Object.keys(playlist).length  > 0){
          const {id} = await fetchCreatePlaylist()
          let tracksId = playlist.map((track) =>  {return track.id});
          tracksId = `spotify:track:${tracksId.join(',spotify:track:')}`
          const msg = fetchUpdatePlaylist(id, tracksId)
          console.log("🚀 ~ file: spottifySlice.js ~ line 56 ~ msg", msg)
        } else{
          console.log('No tengo items');
        }


        } catch (error) {
      console.error("Se quebor el codigo desde slice");    
    }
  }
)




export const spotifySlice = createSlice({
  name: 'spotify',
  initialState: {
    playlist: [],
    isLoading: false
  },

  reducers: {
    setPlaylist: (state,action) => {
      state.playlist = action.payload
    },
    setIsLoading: (state) =>{
      state.isLoading = !state.isLoading
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPlaylist, setIsLoading } = spotifySlice.actions

export default spotifySlice.reducer;

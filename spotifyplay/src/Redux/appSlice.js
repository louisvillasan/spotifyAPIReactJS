import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginSpotify } from '../api/spotifyApi';



const setLocalCredentials =  (credentials) =>{  
  localStorage.setItem('credentials', 
                        JSON.stringify(credentials));
}

export const getToken = createAsyncThunk(
  'token/getToken',
  async (_, { dispatch, getState}) => {
    try {
      const state = getState();
      const hash = window.location.search;
      console.log("🚀 ~ file: appSlice.js ~ line 16 ~ hash", hash)
    
      if (!state.credentials && hash){
          const code = hash.substring(1).split("&").find(elem => elem.startsWith("code")).split("=")[1];
          const credentials = await loginSpotify(code)
          dispatch(setCredentials(credentials));
          setLocalCredentials(credentials);
          
      }
      if (!state.credentials && !hash){
          const localCredentials = JSON.parse(localStorage.getItem('credentials'));
          if (localCredentials)
            dispatch(setCredentials(localCredentials));
          

      }
      window.history.replaceState({}, document.title, "/");
    } catch (error) {
      console.error("Se quebor el codigo desde slice");    
    }
  }
)




export const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    credentials: {}
  },

  reducers: {
    setCredentials: (state,action) => {
      state.credentials = action.payload
    },
    setAccess_token: (state,action) => {
      state.credentials.access_token = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAccess_token, setCredentials} = tokenSlice.actions

export default tokenSlice.reducer;

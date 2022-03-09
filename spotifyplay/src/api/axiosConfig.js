import store from '../Redux/store';
import  axios from 'axios';
import { getRefresh_token } from './spotifyApi';
import { setAccess_token } from '../Redux/appSlice';
const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async config => {
    // const value = await redisClient.get(rediskey)
    const state = store.getState();
    const token  = state.tokenReducer.credentials.access_token
    
    config.headers = { 
      'Authorization': `Bearer ${token}`
      }
    return config;
  },
  error => {
    Promise.reject(error)
});

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  // console.log(originalRequest);
  if (error.response.status === 401 ) {
    // originalRequest._retry = true;
    console.log('Pase para renovar el token');
    const state = store.getState();
    console.log("🚀 ~ file: axiosConfig.js ~ line 33 ~ axiosApiInstance.interceptors.response.use ~ state", state)
    
    const oldRefreshToken = state.tokenReducer.credentials.refresh_token
    const {access_token} = await getRefresh_token(oldRefreshToken);
    store.dispatch(setAccess_token(access_token))
    const newCredentials = {...state.tokenReducer.credentials, access_token:access_token}
    localStorage.setItem('credentials', 
                        JSON.stringify(newCredentials));
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return axiosApiInstance(originalRequest);
  }
  return Promise.reject(error);
});

export default axiosApiInstance
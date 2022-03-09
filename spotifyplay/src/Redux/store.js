import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from './appSlice.js'
import spotify from './spottifySlice.js'
export default configureStore(
    {
        reducer: {
            tokenReducer,
            spotify
        }
    }
)

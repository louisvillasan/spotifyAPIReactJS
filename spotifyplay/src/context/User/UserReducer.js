import {SET_TOKEN} from '../types.js'


const reducer = (state, action) =>{
    const {payload, type} = action;

    switch (type) {
        case SET_TOKEN:
            return {
                token: payload
            }   
        default:
            return state;
    }
}

export default reducer
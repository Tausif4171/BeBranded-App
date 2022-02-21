import { ActionTypes } from "../constants/action-types";
const initialState = {
    products: [{
        id:1,
        name:"Tausif",
        category:"Developer"
    },],
}

export const productReducers = (state, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
    
        default:
            return state;
    }
}
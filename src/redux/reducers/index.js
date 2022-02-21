import { productReducers } from "./productReducers"
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        allProducts :productReducers,
    });

export default reducers;
import { productReducers } from "./productReducers"
import { combineReducers } from "redux";

const reducers = combineReducers(productReducers)

export default reducers;
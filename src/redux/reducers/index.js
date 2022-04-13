import { productReducers, selectedProductReducers } from "./productReducers"
import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        allProducts: productReducers,
        selectedProduct: selectedProductReducers,
    });

export default reducers;
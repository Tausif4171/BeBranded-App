import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const getAllproducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err);
            });
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        getAllproducts();
    }, []);

    console.log("Products:", products);

    return (
        <div>
        <h1 style={{fontWeight:"bold",paddingTop:50}}>Latest Products</h1>
            <div className="ui grid container" >
                <ProductComponent />
            </div>
        </div>
    );
}
export default ProductListing;
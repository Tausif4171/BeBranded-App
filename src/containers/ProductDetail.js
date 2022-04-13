import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail =()=>{
    const selectedProduct = useSelector((state)=> state.selectedProduct);
    const {productId} =useParams();
    const dispatch =useDispatch();
    console.log(productId);
    const fetchSelectedProductDetail =async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("Error: ", err)
        })
        dispatch(selectedProduct(response.data));
    } 
    useEffect(()=>{
        if(productId && productId!==""){
        fetchSelectedProductDetail();
        }
    },[productId]);
    return(
        <div>
            <h1>ProductDetail</h1>
        </div>
    );
}
export default ProductDetail;
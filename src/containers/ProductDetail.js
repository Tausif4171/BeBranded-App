import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail =()=>{
    const product = useSelector((state)=> state.selectedProduct);
    const {id,title,image,price,category,description} =product;
    const {productId} =useParams();
    const dispatch =useDispatch();
    console.log(product);
    const fetchSelectedProductDetail =async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log("Error: ", err);
        });
        dispatch(selectedProduct(response.data));
    } 
    useEffect(()=>{
        if(productId && productId!==""){
        fetchSelectedProductDetail();
        }
    },[productId]);
    return(
        
        <div>
            <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                            <div className="meta">{description}</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default ProductDetail;
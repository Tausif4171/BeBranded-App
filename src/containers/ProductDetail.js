import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
    const product = useSelector((state) => state.selectedProduct);
    const { id, title, image, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);
    const fetchSelectedProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("Error: ", err);
        });
        dispatch(selectedProduct(response.data));
    }
    useEffect(() => {
        if (productId && productId !== "") {
            fetchSelectedProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
        // else {

        // }
    }, [productId]);
    return (
        <div>
            {
                Object.keys(product).length === 0 ? (
                    <div>....loading</div>) :
                    (
                        <div style={{ margin: "60px 20px 0px 20px" }}>
                            <div className="">
                                <div className="card" style={{ width: "100%", height: "100%", padding: "45px 80px 50px 80px", borderRadius:12}}>
                                    <table>
                                        <th>
                                            <tr>
                                                    <div className="image">
                                                        <img src={image} alt={title} style={{ width: "25rem", height: "100%" }} />
                                                    </div>
                                            </tr>
                                        </th>

                                        <th style={{padding: "0px 20px 0px 20px"}}>
                                            <tr style={{}}>
                                                
                                                    <div className="content">
                                                        <div className="header" style={{fontSize:24}}>{title}</div>
                                                        <div className="meta price" style={{fontSize:20,color:"grey"}}>$ {price}</div>
                                                        <div className="meta" style={{fontSize:22}}>{category}</div>
                                                        <div className="meta" style={{fontSize:18,color:"grey"}}>{description}</div>
                                                    </div>
                                               
                                            </tr>
                                        </th>

                                    </table>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
}
export default ProductDetail;
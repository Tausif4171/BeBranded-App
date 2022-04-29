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
                            <div className="ui link cards">
                                <div className="card" style={{ width: "100%", height: "100%", padding: "45px 80px 50px 80px",justifyContent:"space-between" }}>
                                    <table>
                                        <th>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <img src={image} alt={title} style={{ width: "25rem", height: "100%" }} />
                                                    </div>
                                                </td>
                                            </tr>
                                        </th>

                                        <th style={{padding: "0px 20px 0px 20px"}}>
                                            <tr>
                                                <td>
                                                    <div className="content">
                                                        <div className="header">{title}</div>
                                                        <div className="meta price">$ {price}</div>
                                                        <div className="meta">{category}</div>
                                                        <div className="meta">{description}</div>
                                                    </div>
                                                </td>
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
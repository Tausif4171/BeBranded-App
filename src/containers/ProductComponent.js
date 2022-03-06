import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, category } = products[0];

    return (
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"> </div>
                    <div className="content">
                        {/* <div className="header">
                            {category}
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductComponent;
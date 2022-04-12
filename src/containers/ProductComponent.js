import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, category } = products[0];
    const renderList = products.map((product) => {
        const { id, image, title, price, category } = product;
        return (
            <div className="four column wide" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <>
            {renderList}
        </>
    );
}
export default ProductComponent;
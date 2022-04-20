import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import './style.css';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    // const { id, category } = products[0];
    const renderList = products.map((product) => {
        const { id, image, title, price, category } = product;
        return (
            // <div className="four column wide" key={id}>
            //     <Link to={`product/${id}`}>
            //     <div className="ui link cards">
            //         <div className="card">
            //             <div className="image">
            //                 <img src={image} alt={title} />
            //             </div>
            //             <div className="content">
            //                 <div className="header">{title}</div>
            //                 <div className="meta price">$ {price}</div>
            //                 <div className="meta">{category}</div>
            //             </div>
            //         </div>
            //     </div>
            //     </Link>
            // </div>
            <div key={id}>
                <Link id="card-link" to={`product/${id}`}>
                    <Card style={{ width: '18rem', borderRadius: 20, top: 70, marginBottom: 90 }}>
                        <Card.Img variant="top" style={{ width: "50%", height: "100%", margin: "14px 60px 0px 60px" }} src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                $ {price}
                            </Card.Text>
                            <Card.Text>
                                {category}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Link>
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
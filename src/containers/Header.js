import React, { useState } from "react";
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from '../images/logo.ico';

const Header = () => {
    const { loading, setLoading } = useState(true);
    const { searchProduct, setSearchProduct } = useState("");
    const product = useSelector((state) => state.selectedProduct);
    // console.log(product);
    const { id, title, image, price, category, description } = product;
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" style={{ justifyContent: "space-around", padding: "8px 38px 8px 38px" }}>
                <Container fluid >
                    <Navbar.Brand href="#" style={{ fontSize: 29 }}><Link to="/" style={{ color: "#00BFFF" }} className="text-style"> BeBranded </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontSize: 18, marginLeft: 40 }}
                            navbarScroll
                        >
                            <Nav.Link ><Link to="/" className="text-style"> Home </Link></Nav.Link>
                            <Nav.Link ><Link to="/productListing" className="text-style"> Products </Link></Nav.Link>
                            <Nav.Link ><Link to="/contact" className="text-style"> Contact </Link></Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                style={{ fontSize: 18 }}
                                onChange={(e) => {
                                    setSearchProduct(e.target.value);
                                }}
                            />
                            {Object.keys(product).length === 0 ? (
                                <div>....loading</div>) :
                                (product.filter((value) => {
                                    if (searchProduct == "") {
                                        return value;
                                    }
                                    else if (value.title.toLowerCase().includes(searchProduct.toLowerCase())) {
                                        return value;
                                    }
                                    }
                                    )
                                )
                            }
                            <Button variant="outline-success" style={{ fontSize: 18 }}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;
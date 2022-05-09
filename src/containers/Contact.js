import React from 'react';
import { Card, Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", margin: "80px 0px 50px 0px" }}>
      <Card style={{ width:"60rem", borderRadius: 0, margin: "0px 20px 0px 20px" }}>
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ display: "flex" }}>Name</Form.Label>
                <Form.Control type="password" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ display: "flex" }}>Phone Number</Form.Label>
                <Form.Control type="password" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label style={{ display: "flex" }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted" style={{ display: "flex" }}>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{ display: "flex" }}>Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="&nbsp;Check me out" style={{ display: "flex" }} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}

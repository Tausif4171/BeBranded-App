import React from 'react';
import { Card, Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div className='container'>
      <Card className='card_style'>
        <Card.Body>
          <Card.Title className="contact_title">Contact Us</Card.Title>
          <div>
            <Form>
              <div style={{
                display: "flex",
                justifyContent: "space-between"
              }}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="contact_content">First Name</Form.Label>
                  <Form.Control type="password" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="contact_content">Last Name</Form.Label>
                  <Form.Control type="password" placeholder="Enter your first name" />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="contact_content">Phone Number</Form.Label>
                <Form.Control type="password" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label className="contact_content">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="contact_content">Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="&nbsp;Check me out" className="contact_content" />
              </Form.Group>
              <Button variant="primary" type="submit" className='submit_button'>
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

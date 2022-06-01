import React, {useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap'

export default function Contact() {

  const [userData, setUserData] = useState({
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    address:""
  });

  let name, value;
  const postUserData =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUserData({...userData, [name]: value});
  }

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
                  <Form.Control name="firstName" value={userData.firstName} onChange={postUserData} type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="contact_content">Last Name</Form.Label>
                  <Form.Control name="lastName" value={userData.lastName} onChange={postUserData}  type="text" placeholder="Enter your last name" />
                </Form.Group>
              </div>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="contact_content">Phone Number</Form.Label>
                <Form.Control name="phoneNumber" value={userData.phoneNumber} onChange={postUserData}  type="number" placeholder="Enter your phone number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label className="contact_content">Email address</Form.Label>
                <Form.Control name="email" value={userData.email} onChange={postUserData}  type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="contact_content">Address</Form.Label>
                <Form.Control name="address" value={userData.address} onChange={postUserData}  as="textarea" rows={3} placeholder="Message..." />
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

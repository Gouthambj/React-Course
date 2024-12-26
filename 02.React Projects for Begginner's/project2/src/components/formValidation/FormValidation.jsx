import React, { useState } from 'react'
import { Button, Card, CardHeader, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

const FormValidation = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

  const [userColor, setUserColor] = useState('');
  const [emailColor, setEmailColor] = useState('');
  const [passwordColor, setPasswordColor] = useState('');
  const [confirmPasswordColor, setConfirmPasswordColor] = useState('')

  function validate(e){
    e.preventDefault();
    
    if(username.length < 8){
      setErrorUserName("");
      setUserColor("green");
    }else{
      setErrorUserName("Username must be at least 8 characters long");
      setUserColor("red");
    }
    if(email.includes('@') && email.includes('.')){
      setErrorEmail("");
      setEmailColor("green");
    }else{
      setErrorEmail("Invalid email address");
      setEmailColor("red");
    }
    if(password.length >= 8 && password.length <= 20){
      setErrorPassword("");
      setPasswordColor("green");
    }else{
      setErrorPassword("Password must be between 8 and 20 characters long");
      setPasswordColor("red");
    }
    if(password === confirmPassword){
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    }else{
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("red");
    }

    alert("Submitted")

  }
  return (
    <>
     <Container className='my-5'>
      <Row>
        <Col>
          <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">
            FORM VALIDATION
          </h1>
        </Col>
      </Row>
     </Container>
     <Container className='my-5'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={{span:6, offset:3}} >
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <CardHeader>
            <CardTitle className='text-center'>  Form Validation</CardTitle>
          </CardHeader>
          <Form onSubmit={validate}>
          <FormGroup className='mb-3 '>
            <FormLabel>Name</FormLabel>
            <FormControl type="text" placeholder="Enter your name" 
             value={username} onChange={(e) => setUsername(e.target.value)}
             style={{borderColor:userColor}} />
          </FormGroup>
          <p className='text-danger'>{errorUserName} </p>
          <FormGroup className='mb-3'>
            <FormLabel>Email</FormLabel>
            <FormControl type="email" placeholder="name@email.com"
            value={email} onChange={(e) => setEmail(e.target.value)}
            style={{borderColor:emailColor}} />
          </FormGroup>
          <p className='text-danger'>{errorEmail}</p>
          <FormGroup className='mb-3'>
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            style={{borderColor:passwordColor}} />
          </FormGroup>
          <p className='text-danger'>{errorPassword}</p>
          <FormGroup className='mb-3'>
            <FormLabel>Confirm-Password</FormLabel>
            <FormControl type="Confirm-password" placeholder='Confirm your password'
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
            style={{borderColor:confirmPasswordColor}} />
          </FormGroup>
          <p className='text-danger'>{errorConfirmPassword}</p>
          <Button variant="outline-primary" type="submit">
             Submit
          </Button>
          </Form>
        </Card>
          
        </Col>
      </Row>
     </Container>
    </>
  )
}

export default FormValidation

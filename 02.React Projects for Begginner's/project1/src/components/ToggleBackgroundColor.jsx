import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white')
  const [textColor, setTextColor] = useState('black');
  const [buttonStyle, setButtonStyle] = useState('primary');

  function handlerClick() {
    setBackgroundColor(backgroundColor === 'white' ? '#141414' : 'white');
    setTextColor(textColor === 'black' ? 'white' : 'black');
    setButtonStyle(buttonStyle === 'primary' ? 'secondary' : 'primary');
  };

  return (
    <>
      <Container className='my-3'>
        <Row>
          <Col> 
              
              <h1 className='bg-primary text-white p-3 rounded text-center fs-3 my-3'>
              TOGGLE BACKGROUND COLOR COMPONENT
              </h1>
              <button className='my-3 bg-primary rounded p-2'
               onClick={handlerClick}
               style={{buttonStyle, color:textColor, border: `2px solid ${textColor}` ,}}>
               Click Me</button>
          </Col>
        </Row>
      </Container>
      

      
      <Container className='my-3' style={{backgroundColor, color:textColor}}>
        <Row>
          
          <Col className=' text-center fs-3 my-3'> 
          
              WelCome To REACT world
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default ToggleBackgroundColor

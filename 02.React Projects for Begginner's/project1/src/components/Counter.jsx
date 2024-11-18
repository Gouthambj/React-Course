import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Counter = () => {
    //const [stateName(Name of Variable), stateHandler(is used for to update the state value) = useState(initial value)]
    const [count, setCount ] = useState(0);
    
    const increment= () =>{setCount(count + 1)};

    const decrement= () =>setCount(count - 1);
    


  return (
    <>
        <Container className='my-3'>
            <Row>
                <Col>
                    <h1 className='bg-primary text-white text-center my-3 p-3 rounded '>Conter Component</h1>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-primary text-center '> {count}</h1>
                </Col>
            </Row>
        </Container>
        <Container className='my-3'>
            <Row>
                <Col>
                    <Button className='bg-success rounded-circle fs-4' onClick={increment}>+</Button>
                    <Button className='bg-danger rounded-circle float-end fs-4 ' onClick={decrement}>-</Button>

                </Col>
            </Row>
        </Container>
      
    </>
  )
}

export default Counter

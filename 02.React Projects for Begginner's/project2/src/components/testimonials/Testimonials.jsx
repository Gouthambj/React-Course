import React, { useState } from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    {
      quote: '1.This is the best product ever.',
      author: '-Jane Doe',
      },
      {
        quote: '2.This is highly recommended product.',
      author: '-John Smith',
        },
        {
          quote: '3.This is product is amazing.',
          author: 'Bob Jane',
          },
          ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) %testimonials.length);
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    };

  return (
    <>
     <Container className='my-5'>
       <Row>
        <Col>
          <h1 className='text-center display-5 text-light bg-secondary p-3 border-radius rounded shadow' 
          >TESTIMONIALS COMPONENT</h1>
        </Col>
       </Row>
    </Container>

    <Container>
      <Row className='my-5'>
        <Col>
          <div className="shadow bg-secondary p-5 text-center rounded text-white">
            <div>
              <p className='text-center'>{testimonials[currentIndex].quote}</p>
              <h4>{testimonials[currentIndex].author}</h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={prevSlide} variant='outline-secondary w-25' className='my-3'> Prev</Button>
          <Button onClick={nextSlide} variant='outline-secondary w-25 float-end'> Next</Button>

        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Testimonials

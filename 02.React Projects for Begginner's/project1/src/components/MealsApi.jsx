import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const MealsApi = () => {
  const [items, setItems] = useState([]);
  console.log("State :", items);

  useEffect(() =>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => {
      console.table(response.data.meals);
      setItems(response.data.meals);
    })
    .catch(error => console.error(error));
  }, []);


  //User Defined Function
  const MeaslsCard = (props) => {
    // console.log(props);
    const {idMeals, strMeal, strMealThumb } = props;
    return (
      <Card className='my-3 p-3 rounded' bg="dark" text="white">
        <Card.Img  src={strMealThumb} />
        <Card.Body>
          <Card.Text>
            Meal ID : <span className='float-end'>{idMeals} </span>
          </Card.Text>
          <Card.Title className='text-center'>{strMeal}</Card.Title>
          <Button variant="outline-primary" className='w-100'>Order NOW</Button>
          
            
        
        </Card.Body>
      </Card>
    )
  }
  
  return (
    <>
      <Container className='my-3'>
        <Row>
          <Col>
          <h1 className="display-5 text-center bg-primary text-white p-3 rounded">
            Meals API Component</h1></Col>
            <hr />
            {
              items.map((item, index) => {
                return (
                  <Col key={index} sm={12} md={6} lg={4}>
                    <MeaslsCard idMeals={item.idMeal} strMeal={item.strMeal
                    } strMealThumb={item.strMealThumb} />
                    </Col>
                    )
                    })
                  
            }
        </Row>
      </Container>
    </>
  )
}

export default MealsApi

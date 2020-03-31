import React from 'react'
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Badge } from 'reactstrap'

const pizzaItem = {
  name: 'Thin Crust',
  desc: 'Delicious and Yummy!',
  size: 'Large',

};

const pizzaImgs = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
];


function PizzaList() {

  const pizzaList = [pizzaItem, pizzaItem, pizzaItem];

  return (
    <>
      <Row xs='1' sm='2' md='3' lg='4' xl='5'>
        {pizzaList.map(item => {
          return (
            <Col>
              <PizzaCard pizza={item} />
            </Col>
          )
        })}
      </Row>
      <Row>
        <Col>
        </Col>
      </Row>
    </>
  )
}

function PizzaCard(props) {

  return (

    <Card>
      <CardImg top width="90%"
       src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
      <CardBody>
        <CardTitle><h3>{props.pizza.name}</h3></CardTitle>
        <Badge color='info'>Large</Badge>
        <Badge color='primary'>Medium</Badge>
        <Badge color='danger'>Small</Badge>
        <CardText>{props.pizza.desc}</CardText>
        <Button color='primary'>Order</Button>
      </CardBody>
    </Card>

  )
}

export default PizzaList;
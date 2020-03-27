// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import PizzaConfig from './PizzaConfig';
import Cart from './Cart';

const orderSchema = yup.object().shape({
  name: yup.string().required('You need to enter a name'),
  email: yup.string().email().required('You must enter an email address'),
  password: yup.string().required('You must enter a password'),
});

const orderMessages = {}
const validationObject = {
  yupSchema: orderSchema,
  messages: orderMessages
}

const defaultOrder = {
  pizzaName: 'Thin Crust',
  sizeChoice: 'Large',
  toppingOne: false,
  toppingTwo: false,
  toppingThree: false,
  toppingFour: false,
  // toppings: [],
  isGlutenToggle: false,
  instructions: '',
  // pizza: null,
  isPickupOn: false,
  isUtensilsOn: false,
}


function Pizza(props) {

  const [order, setOrder] = useState(defaultOrder);

  const onChangeHandler = event => {
    setOrder({
      ...order,
      [event.target.name]:
        ((event.target.type === 'checkbox') || (event.target.type === 'switch')) ?  event.target.checked : event.target.value,
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    // post order to server; get UID
    // id: uuid()
  }

  return (
    <>
    <Form name='pizzaOrderForm' id='pizzaOrderForm' method='post' onSubmit={onSubmitHandler}>

      <Row xs='1' sm='3'>
        <Col></Col>
        <Col>

          <Switch>
            <Route path='/pizza/cart'>
              <Cart onChange={onChangeHandler} order={order} />
            </Route>
            <Route path='/pizza'>
              <PizzaConfig onChange={onChangeHandler} order={order} />
            </Route>
          </Switch>

        </Col>
        <Col></Col>
      </Row>
    </Form>
    <Row xs='1' sm='3'>
    <Col></Col>
      <Col>
        <code>
          {JSON.stringify(order)}
        </code>
      </Col>
      <Col></Col>
    </Row>
    </>
  )
}

export default Pizza;
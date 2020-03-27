// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import PizzaConfig from './PizzaConfig';
import Cart from './Cart';

const defaultPizza = {
  name: 'Thin Crust',
  size: 'Large',
  toppings: [],
  isGlutenFree: false,
  instructions: '',
}

const defaultOrder = {
  pizza: null,
  isPickUp: false,
  isUtensilsOn: false,
}


function Pizza(props) {

  // const onChangeHandler = event => {
  //   setSignupFormState({
  //     ...signupFormState,
  //     [event.target.name]:
  //       ((event.target.type === 'checkbox') || (event.target.type === 'switch')) ?  event.target.checked : event.target.value,
  //   });
  // };

  // const onSubmitHandler = event => {
  //   event.preventDefault();
  //   // do something
  // }



  const [pizza, setPizza] = useState(null)
  // 

  return (
    <>
    <Form name='pizzaOrderForm' id='pizzaOrderForm' method='post' onSubmit={props.onSubmit}>

      <Row xs='1' sm='3'>
        <Col></Col>
        <Col>

          <Switch>
            <Route path='/pizza/cart'>
              <Cart />
            </Route>
            <Route path='/pizza'>
              <PizzaConfig />
            </Route>
          </Switch>

        </Col>
        <Col></Col>
      </Row>
    </Form>
    </>
  )
}

export default Pizza;
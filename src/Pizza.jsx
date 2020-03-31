// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import PizzaConfig from './PizzaConfig';
import PizzaFinalize from './PizzaFinalize';
import Order from './Order';

const defaultPizza = {
  pizzaName: '',
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

// yup schema
const pizzaSchema = yup.object().shape({
  pizzaName: yup.string().min(2, "Your name must be at least 2 characters").required('You need to enter a name'), // at least 2 chars
  // sizeChoice: yup.string().required('You must select a size'),
  sizeChoice: yup.string(),
  toppingOne: yup.boolean(),
  toppingTwo: yup.boolean(),
  toppingThree: yup.boolean(),
  toppingFour: yup.boolean(),
  // toppings: [],
  isGlutenToggle: yup.boolean(),
  instructions: yup.string(),
  // pizza: null,
  isPickupOn: yup.boolean(),
  isUtensilsOn: yup.boolean(),
});


function Pizza(props) {

  const [pizza, setPizza] = useState(defaultPizza);
  const [order, setOrder] = useState(null);
  const [orderResult, setOrderResult] = useState();

  const [errors, setErrors] = useState({
    pizzaName: "",
  })

  // useEffect(() => {
  //   pizzaSchema.isValid(pizzaSchema)
  // })

  const onChangeHandler = e => {
    e.persist();
    let newPizza = {
      ...pizza,
      [e.target.name]:
        ((e.target.type === 'checkbox') || (e.target.type === 'switch')) ?
          e.target.checked : e.target.value,
    }
    validateChange(e);
    setPizza(newPizza);
    // setPizza({
    //   ...pizza,
    //   [e.target.name]:
    //     ((e.target.type === 'checkbox') || (e.target.type === 'switch')) ?
    //       e.target.checked : e.target.value,
    // });
    // validateChange(e)
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    // run client-side valization
    // create post object

    let newOrder = {
      id: uuid(),
      pizza: pizza,
    }
    setOrder(newOrder);

    let testObject = {
      'email': 'bob@mail.net',
      'password': 'password'
    }
    // submit post, wait for result
    axios
      .post('https://reqres.in/api/register', testObject)
      .then(res => {
        let newOrderResult = {
          orderId: res.data['id'],
          orderData: order,
          success: true,
          message: "Thank you for your purhcase!",
        };
        // populate result in state
        setOrderResult(newOrderResult);
      })
      .catch(err => {
        // do something
      })
  }

  const validateChange = e => {
    yup
      .reach(pizzaSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setErrors({...errors, [e.target.name]: ""})
      })
      .catch(err => {
        setErrors({...errors, [e.target.name]: err.errors[0]})
      })
  }

  return (
    <>
    <Row xs='1' sm='3'>
      <Col></Col>
      <Col>
        <Route exact path='/pizza'>
          <Link to='/pizza/config'>
            <Button disabled={false} type='button'>Begin</Button>
          </Link>
        </Route>
        <Route path='/pizza'>
          <Form name='pizzaOrderForm' id='pizzaOrderForm' method='post' onSubmit={onSubmitHandler}>
            <Route path='/pizza/config'>
              <PizzaConfig onChange={onChangeHandler} pizza={pizza} errors={errors} />
            </Route>
            <Route path='/pizza/finalize'>
              <PizzaFinalize onChange={onChangeHandler} pizza={pizza} />
            </Route>
          </Form>
        </Route>
        <Route path='/order'>
          <Order order={order} />
        </Route>
      </Col>
      <Col></Col>
    </Row>
    <Row xs='1' sm='3'>
      <Col></Col>
      <Col>
        <h4>Pizza data</h4>
        <code>
          {JSON.stringify(pizza)}
        </code>
        <h4>Order data</h4>
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
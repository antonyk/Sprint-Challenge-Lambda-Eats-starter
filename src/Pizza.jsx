// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';
import { v4 as uuid } from 'uuid';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import PizzaConfig from './PizzaConfig';
import PizzaFinalize from './PizzaFinalize';
import Order from './Order';

// import Cart from './Cart';

const defaultPizza = {
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

  const [pizza, setPizza] = useState(defaultPizza);
  const [order, setOrder] = useState(null);

  const onChangeHandler = event => {
    setPizza({
      ...pizza,
      [event.target.name]:
        ((event.target.type === 'checkbox') || (event.target.type === 'switch')) ?  event.target.checked : event.target.value,
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    let newOrder = {
      id: uuid(),
      pizza: pizza,
      success: true,
      message: "Thank you for your purhcase!",
    };
    // post order to server; get UID
    setOrder(newOrder);
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
              <PizzaConfig onChange={onChangeHandler} pizza={pizza} />
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
        <code>
          {JSON.stringify(pizza)}
        </code>
      </Col>
      <Col></Col>
    </Row>
    </>
  )
}

export default Pizza;
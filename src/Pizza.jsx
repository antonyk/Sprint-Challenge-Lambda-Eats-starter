// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'
import PizzaConfig from './PizzaConfig';
import Cart from './Cart';


function Pizza(props) {

  return (
    <>
    <Switch>
    <Route path='/pizza/cart'>
      <Cart />
    </Route>
    <Route path='/pizza'>
      <PizzaConfig />
    </Route>
    </Switch>
    </>
  )
}

export default Pizza;
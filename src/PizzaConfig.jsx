// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'

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


function PizzaConfig(props) {

  return (
    <>
    <Row xs='1' sm='3'>
      <Col></Col>
      <Col>
        <Form name='pizzaOrderForm' id='pizzaOrderForm' method='post' onSubmit={props.onSubmit}>
          <FormGroup>
            <Label for='nameInput'>Name</Label>
            <Input type='text' name='nameInput' id='nameInput' />
          </FormGroup>
          <FormGroup>
            <Label for='sizeChoice'>
              Choice of Pizza
            </Label>
            <Input type='select' name='sizeChoice' id='sizeChoice'>
              <option value="large" >Large</option>
              <option value="medium" >Medium</option>
              <option value="small" >Small</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                Add Toppings (up to 10)
              </Col>
            </Row>
            <Row>
              <Col>
                <Input type='checkbox' name='toppingOne' id='toppingOne' />
                <Label for='toppingOne'>Topping 1</Label>
              </Col>
              <Col>
                <Input type='checkbox' name='toppingTwo' id='toppingTwo' />
                <Label for='toppingTwo'>Topping 2</Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input type='checkbox' name='toppingThree' id='toppingThree' />
                <Label for='toppingThree'>Topping 3</Label>
              </Col>
              <Col>
                <Input type='checkbox' name='toppingFour' id='toppingFour' />
                <Label for='toppingFour'>Topping 4</Label>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label for='isGlutenToggle'>Gluten Free?</Label>
            <CustomInput type='switch' name='isGlutenToggle' id='isGlutenToggle' />
              {/* checked={props.state.isTermsOn}
              onChange={props.onChange} /> */}
          </FormGroup>
          <FormGroup>
            <Label for='instructions'>Special Instructions</Label>
            <Input name='instructions' id='instructions' type='text'></Input>
          </FormGroup>
          <Link to='/pizza/cart'>
            <Button disabled={false} type='submit' >Continue</Button>
          </Link>
      </Form>
      </Col>
      <Col></Col>
    </Row>
    </>
  )
}

export default PizzaConfig;
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


function Cart(props) {

  return (
    <Row xs='1' sm='3'>
      <Col></Col>
      <Col>
        <Form name='pizzaOrderForm' id='pizzaOrderForm' method='post' onSubmit={props.onSubmit}>
          <FormGroup>
            <Label for='isPickupOn'>Pick Up?</Label>
            <CustomInput type='switch' name='isPickupOn' id='isPickupOn' />
              {/* checked={props.state.isTermsOn}
              onChange={props.onChange} /> */}
          </FormGroup>
          <FormGroup>
            <Label for='isUtensilsOn'>Do you need utensils?</Label>
            <CustomInput type='switch' name='isUtensilsOn' id='isUtensilsOn' />
              {/* checked={props.state.isTermsOn}
              onChange={props.onChange} /> */}
          </FormGroup>

          <Button disabled={false} type='submit' >Place Order</Button>

        </Form>
      </Col>
      <Col></Col>
    </Row>
  )
}

export default Cart;
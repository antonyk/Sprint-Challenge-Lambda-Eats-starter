// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'


function PizzaFinalize(props) {

  return (
    <>
    <FormGroup>
      <Label for='isPickupOn'>Pick Up?</Label>
      <CustomInput type='switch' name='isPickupOn' id='isPickupOn'
        checked={props.pizza.isPickupOn}
        onChange={props.onChange} />
    </FormGroup>
    <FormGroup>
      <Label for='isUtensilsOn'>Do you need utensils?</Label>
      <CustomInput type='switch' name='isUtensilsOn' id='isUtensilsOn'
        checked={props.pizza.isUtensilsOn}
        onChange={props.onChange} />
    </FormGroup>
    <FormGroup>
      <Row>
        <Col>
          <Link to='/pizza/config'>
          <Button disabled={false} type='button'>Back</Button>
          </Link>
        </Col>
        <Col>
          <Link to='/order'>
            <Button disabled={false} type='submit'>Place Order</Button>
          </Link>
        </Col>
      </Row>
    </FormGroup>
    </>
  )
}

export default PizzaFinalize;
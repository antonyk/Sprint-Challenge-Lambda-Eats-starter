// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'


function PizzaConfig(props) {

  return (
    <>
      <FormGroup>
        <Label for='pizzaName'>Name</Label>
        <Input type='text' name='pizzaName' id='pizzaName'
          onChange={props.onChange}
          value={props.order.name} />
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
            <Input type='checkbox' name='toppingOne' id='toppingOne'
              onChange={props.onChange}
              checked={props.order.toppingOne} />
            <Label for='toppingOne'>Topping 1</Label>
          </Col>
          <Col>
            <Input type='checkbox' name='toppingTwo' id='toppingTwo'
              onChange={props.onChange}
              checked={props.order.toppingTwo} />
            <Label for='toppingTwo'>Topping 2</Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type='checkbox' name='toppingThree' id='toppingThree'
              onChange={props.onChange}
              checked={props.order.toppingThree} />
            <Label for='toppingThree'>Topping 3</Label>
          </Col>
          <Col>
            <Input type='checkbox' name='toppingFour' id='toppingFour'
              onChange={props.onChange}
              checked={props.order.toppingFour} />
            <Label for='toppingFour'>Topping 4</Label>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Label for='isGlutenToggle'>Gluten Free?</Label>
        <CustomInput type='switch' name='isGlutenToggle' id='isGlutenToggle'
          onChange={props.onChange}
          checked={props.order.isGlutenToggle} />
          {/* checked={props.state.isTermsOn}
          onChange={props.onChange} /> */}
      </FormGroup>
      <FormGroup>
        <Label for='instructions'>Special Instructions</Label>
        <Input name='instructions' id='instructions' type='text'
          onChange={props.onChange}
          value={props.order.instructions} />
      </FormGroup>
      <FormGroup>
        <Link to='/pizza/cart'>
          <Button disabled={false} type='submit' >Continue</Button>
        </Link>
      </FormGroup>
    </>
  )
}

export default PizzaConfig;
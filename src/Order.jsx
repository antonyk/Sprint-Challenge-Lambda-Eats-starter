// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap'



function Order(props) {

  return (
    <div>
      <div>Congratulations!</div>
      <div>Your order number is: {props.order.id}</div>
    </div>
  )
}

export default Order;
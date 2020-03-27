// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';

// style imports
import {Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

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


function Pizza() {

  return (
    <div>
    </div>
  )
}

export default Pizza;
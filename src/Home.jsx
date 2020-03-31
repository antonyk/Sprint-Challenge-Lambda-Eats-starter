// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

// style imports
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'

import PizzaList from './PizzaList';
import PizzaFinalize from './PizzaFinalize';

function HomePage() {

  return (
    <>
      <Jumbotron>
        <h1>Fresh pizza, always on time!</h1>
        <p>
          Order your fresh pizza online from us
        </p>
      </Jumbotron>
      <PizzaList />
      {/* <p>
        <Link to={`/pizza`}>
          <Button color='primary' type='button'>Order Pizza</Button>
        </Link>
      </p> */}
    </>
  )
}


export default HomePage;
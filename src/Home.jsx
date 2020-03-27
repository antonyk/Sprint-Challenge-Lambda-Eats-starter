// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

// style imports
import {Container, Row, Col, Jumbotron, Button} from 'reactstrap'


function HomePage() {

  return (
    <div>
      <Jumbotron>
        <h1>Fresh pizza, always on time!</h1>
        <p>
          Get your fresh pizza from us
        </p>
        <p>
          <Link to={`/pizza`}>
            <Button color='primary'>Pizza</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  )
}

export default HomePage;
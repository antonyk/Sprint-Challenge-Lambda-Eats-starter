// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom'

// style imports
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap'
// import SignupPage from './components/SignupPage'
// import HomePage from './components/HomePage'

// import components
import HeaderComponent from './Header'


const App = () => {

  return (
    <div className="App">
      <HeaderComponent />
      <Container className='themed-container' fluid={true}>
        <Switch>
          <Route path='/pizza'>
            {/* <SignupPage state={signupFormState} onChange={onChangeHandler} onSubmit={onSubmitHandler} /> */}
          </Route>
          <Route path='/'>
            {/* <HomePage /> */}
          </Route>
        </Switch>
      </Container>
    </div>
  );


};
export default App;



function Pizza() {

}
// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom'

// style imports
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap'
// import SignupPage from './components/SignupPage'

// import components
import HeaderComponent from './Header'
import HomePage from './Home'
import Pizza from './Pizza'

const userData = {
  name: "John Doe",
  address: "123 Street, Here Ville, NY",
  payment: "Mastercard",
}


const App = () => {

  const [user, setUser] = useState(userData);

  return (
    <div className="App">
      <HeaderComponent />
      <Container className='themed-container' fluid={true}>
        <Switch>
          <Route path='/pizza'>
            <Pizza user={user} />
            {/* <Pizza state={signupFormState} onChange={onChangeHandler} onSubmit={onSubmitHandler} /> */}
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Container>
    </div>
  );


};
export default App;


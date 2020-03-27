import React from 'react'

import logo from './logo.svg';

function HeaderComponent() {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        Lambda Eats
      </div>
    </header>
  )
}


export default HeaderComponent;
import React, { Component } from 'react';
import Login from '../Components/Login/index';


import './style.scss';


class Landing extends Component {
  render() {
    return (
      <div className={'landing-container'}>

        <Login />

      </div>
    );
  }
}

export default Landing;
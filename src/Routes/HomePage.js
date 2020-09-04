import React, { Component } from 'react';
import CustomButton from '../Components/Common/CustomButton';
import { Redirect } from 'react-router-dom';
import './style.scss';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import Navbar from '../Components/Navbar';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }

  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  componentWillMount() {
    var ls = require('local-storage');
    if (!ls.get('token')) {
      this.setState({

        redirect: true
      })
    }

  }
  handleClick = () => {
    var ls = require('local-storage');
    ls.clear();
    this.setState({
      redirect: true
    })
  }
  render() {

    return (
      <div>
        {this.renderRedirect()}
        <Navbar handleClick={this.handleClick} />


      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {

    user: state.AuthReducer.user,


  }
}

export default (connect(mapStateToProps)(HomePage));
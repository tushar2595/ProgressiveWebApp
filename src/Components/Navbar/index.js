import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
import ParkingVoilation from '../../Components/ParkingVoilation';
import Header from '../Header/index';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showParking: true,
      showDashboard: false,
      showReport: false,
      showAccountDetails: false,
      active: null
    }
  }
  activePostion = (position) => {
    if (this.state.active === position) {
      this.setState({ active: null })
    }
    else {
      this.setState({
        active: position
      })
    }
  }
  changeColor = (position) => {
    if (this.state.active === position) {
      return "#90EE90";
    }
    return "";
  }
  render() {
    console.log(this.props, 'sss');
    return (
      <>
        <Header />
        <div className={'nav-main'}>
          <div className={'nav-container'}>
            <div onClick={() => { this.setState({ showAccountDetails: false, showParking: false, showReport: false, showDashboard: true }); this.activePostion(0) }} style={{ background: this.changeColor(0) }} className={'nav-item'}>
              Dashboard
        </div>
            <div onClick={() => { this.setState({ showAccountDetails: true, showParking: false, showReport: false, showDashboard: false }); this.activePostion(1) }} style={{ background: this.changeColor(1) }} className={'nav-item'}>
              Account Details
        </div>
            <div onClick={() => { this.setState({ showAccountDetails: false, showParking: true, showReport: false, showDashboard: false }); this.activePostion(2) }} style={{ background: this.changeColor(2) }} className={'nav-item'}>
              Parking Voilation
        </div>
            <div onClick={() => { this.setState({ showAccountDetails: false, showParking: false, showReport: true, showDashboard: false }); this.activePostion(3) }} className={'nav-item'} style={{ background: this.changeColor(3) }}>
              Reports
        </div>

          </div>
          {

            this.state.showDashboard &&
            < div className={'nav-content'}>
              This is Dash board
         </div>
          }

          {
            this.state.showParking &&
            <div className={'nav-content p-3'}>
              <ParkingVoilation />
              <button onClick={this.props.handleClick}>Logout</button>
            </div>
          }
          {
            this.state.showAccountDetails &&
            <div className={'nav-content'}>
              This is account details
        </div>
          }
          {
            this.state.showReport &&
            <div className={'nav-content'}>
              This is Reports
        </div>
          }
        </div >
      </>
    )
  }
}
export default Navbar;
import React from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import LoadingDots from './LoadingDots';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        {" | "}
        <NavLink  to="/courses" activeClassName="active">Courses</NavLink >
        {" | "}
        <NavLink  to="/about" activeClassName="active">About</NavLink >
        {this.props.loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
    );
  }
}

Header.propTypes = {
  loading: Proptypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(Header);

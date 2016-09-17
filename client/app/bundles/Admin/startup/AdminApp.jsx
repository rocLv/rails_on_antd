import React from 'react';
import ReactOnRails from 'react-on-rails';
// import { Router, Route, Link } from 'react-router'

import Dashboard from '../containers/Dashboard'
//
//const AdminApp = (props) => (
//  <Dashboard {...props} />
//);
//
//

//const AdminApp = React.CreateClass ({
//  render() {
//    return (
//      <Dashboard />
//    )
//  }
//})

  const AdminApp = React.createClass({
    render() {
      return (
        <Dashboard />
      );
    },
  });
  ReactOnRails.register({ AdminApp });

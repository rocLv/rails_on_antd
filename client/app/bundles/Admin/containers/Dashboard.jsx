import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import HeaderBox from './HeaderBox'
import FooterBox from './FooterBox'
import Container from './Container'
import LoginFormBox from './LoginFormBox'

export default class Dashboard extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/admin' component={HeaderBox} />
        <Route path='/head' component={HeaderBox} />
        <Route path='/admin/login' component={LoginFormBox} />
        <Route path='/foot' component={FooterBox} />
      </Router>
    )
  }
}

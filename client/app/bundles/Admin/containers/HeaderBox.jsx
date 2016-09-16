import React, { PropTypes } from 'react';
import Header from '../components/Header';

export default class HeaderBox extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render () {
    return (
      <Header />
    )
  }
}

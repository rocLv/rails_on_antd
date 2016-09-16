import React from 'react'
import HeaderBox from './HeaderBox'
import FooterBox from './FooterBox'
import Container from './Container'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div>
        <HeaderBox />
        <Container />
        <FooterBox />
      </div>
    )
  }
}

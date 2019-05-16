import React, { Component } from 'react'
import Header from '../components/header/Header'
import Intro from '../components/bio/Intro'
import Portfolio from '../components/portfolio/Portfolio'

export default class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Intro />
        <Portfolio />
      </main>
    )
  }
}

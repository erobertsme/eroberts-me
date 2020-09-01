import React, { Component } from 'react'
import Header from '../components/header/Header'
import blue from '../images/background.png'

// import Intro from '../components/bio/Intro'
// import Portfolio from '../components/portfolio/Portfolio'

let mainStyle = {
  backgroundImage: 'url('+blue+')',
  backgroundSize: 'cover'
};

export default class Main extends Component {
  render() {
    return (
      <main style={mainStyle}>
        <Header />
      </main>
    )
  }
}

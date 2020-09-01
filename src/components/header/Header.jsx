import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Links from './Links'
import Me from '../../images/me.png'
// import { FaChevronDown } from 'react-icons/fa'

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.titles = [
      "Full-stack Web Developer",
      "Technomancer"
    ]
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount = () => {
    this.setTitle()
  }

  getTitle = () => {
    const nextTitle = this.titles[this.state.currentIndex]

    if (this.state.currentIndex === this.titles.length - 1) {
      this.setState({ currentIndex:  0 })
    } else {
      this.setState((prevState) => { return { currentIndex:  prevState.currentIndex + 1 } })
    }

    return nextTitle
  }

  setTitle = () => {
    const title = ReactDOM.findDOMNode(this.refs.title)
    title.textContent = this.getTitle()
  }

  render() {
    return (
    <header>
      <img src={Me} alt=""/>
      <div className="name">Ethan Roberts</div>
      <div className="title" ref="title" onClick={this.setTitle}></div>
      <Links />
      {/* <FaChevronDown className="chevron-down" /> */}
    </header>
    )
  }
}

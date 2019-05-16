import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Links from './Links'
import { FaHatWizard } from 'react-icons'

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.titles = [
      "Technomancer",
      "Full-stack web developer"
    ]
    this.state = {
      currentIndex: 0
    }
  }

  componentDidMount = () => {
    this.timerID = setInterval(
      () => this.tick(),
      20000
    );
    this.setTitle()
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setTitle()
  }

  getTitle = () => {
    const nextTitle = this.titles[this.state.currentIndex]

    if (this.state.currentIndex === this.titles.length - 1) {
      this.setState({ currentIndex:  0 })
    } else {
      this.setState((prevState, props) => { return { currentIndex:  prevState.currentIndex + 1 } })
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
      <img src="https://via.placeholder.com/150" alt=""/>
      <div className="name">Ethan Roberts</div>
      <div className="title" ref="title"></div>
      <Links />
    </header>
    )
  }
}

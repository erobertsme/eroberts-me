import React, { Component } from 'react'
import '../styles/crypto.scss'

import { encrypt, decrypt } from '../utils/crypto.js'

export default class Main extends Component {
  state = {
    secret: "",
    input: "",
    output: ""
  }

  handleChange = (ev) => {
    switch (ev.target.name) {
      case "secret":
        let reEncrypted = encrypt(this.state.input, ev.target.value)
        this.setState({
          secret: ev.target.value,
          output: reEncrypted
        })
        break;
      case "input":
        let encrypted = encrypt(ev.target.value, this.state.secret)
        this.setState({
          input: ev.target.value,
          output: encrypted
        })
        break;
      case "output":
        let decrypted = decrypt(ev.target.value, this.state.secret)
        this.setState({
          input: decrypted,
          output: ev.target.value
        })
        break;
      default:
        break;
    }
    
  }

  handleClick = (ev) => {
    ev.target.select()
  }

  render() {
    return (
      <main>
        <h1>Crypto</h1>
        <form>
          <label id="secret-label" htmlFor="secret">Secret</label>
          <input name="secret" type="text" value={this.state.secret} onChange={this.handleChange} />

          <label id="input-label" htmlFor="input">Input</label>
          <textarea id="input" name="input" cols="60" rows="20" onChange={this.handleChange} value={this.state.input}></textarea>

          <label id="output-label" htmlFor="ouput">Output</label>
          <textarea id="output" name="output" cols="60" rows="20" onChange={this.handleChange} onClick={this.handleClick} value={this.state.output}></textarea>
        </form>
        <h2><a href="/">Back</a></h2>
      </main>
    )
  }
}

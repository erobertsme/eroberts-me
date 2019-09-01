import React, { Component } from 'react'
import '../styles/crypto.scss'

import { encrypt, decrypt } from '../utils/crypt.js'

export default class Main extends Component {
  state = {
    secret: "",
    input: "",
    output: ""
  }

  checkSecretLength = () => {
    if (this.state.secret.length >= 8) {
      return true
    } else {
      return false
    }
  }

  handleChange = (ev) => {
    switch (ev.target.name) {
      case "secret":
        this.setState({secret: ev.target.value})
        break;
      case "input":
        let encrypted = encrypt(ev.target.value, this.state.secret)
        console.log(encrypted)
        this.setState({
          input: ev.target.value,
          output: encrypted
        })
        break;
      case "output":
        let decrypted = decrypt(ev.target.value, this.state.secret)
        console.log(decrypted)
        this.setState({
          input: decrypted,
          output: ev.target.value
        })
        break;
      default:
        break;
    }
    
  }

  render() {
    return (
      <main>
        <h1>Crypto</h1>
        <form>
          <label id="secret-label" htmlFor="secret">Secret</label>
          <input name="secret" type="text" value={this.state.passwsord} onChange={this.handleChange} />

          <label id="input-label" htmlFor="input">Input</label>
          <textarea id="input" name="input" cols="60" rows="20" onChange={this.handleChange} value={this.state.input}></textarea>

          <label id="output-label" htmlFor="ouput">Output</label>
          <textarea id="output" name="output" cols="60" rows="20" onChange={this.handleChange} value={this.state.output}></textarea>
        </form>
      </main>
    )
  }
}

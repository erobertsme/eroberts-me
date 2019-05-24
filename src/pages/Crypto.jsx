import React, { Component } from 'react'
import '../styles/crypto.scss'

var CryptoJS = require("crypto-js");

function encrypt(input, secret) {
  return CryptoJS.AES.encrypt(input, secret)
}

function decrypt(input, secret) {
  return CryptoJS.AES.decrypt(input, secret)
}

export default class Main extends Component {
  state = {
    secret: "",
    input: "",
    output: ""
  }

  handleChange = (ev) => {
    switch (ev.target.name) {
      case "secret":
        this.setState({secret: ev.target.value})
        break;
      case "input":
        let encrypted = encrypt(ev.target.value, this.state.secret).toString(CryptoJS.enc.Utf8)
        console.log(encrypt.toString(CryptoJS.enc.Utf8))
        this.setState({
          input: ev.target.value,
          output: encrypted
        })
        break;
      case "output":
        let decrypted = decrypt(ev.target.value, this.state.secret).toString(CryptoJS.enc.Utf8)
        console.log(decrypt.toString(CryptoJS.enc.Utf8))
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
          <label id="secret-label" htmlFor="secret">secret</label>
          <input name="secret" type="text" value={this.state.passwsord} onChange={this.handleChange} />

          <label id="input-label" htmlFor="input">Input</label>
          <textarea id="input" name="input" cols="60" rows="20" onChange={this.handleChange}>{this.state.input}</textarea>

          <label id="output-label" htmlFor="ouput">Output</label>
          <textarea id="output" name="output" cols="60" rows="20" onChange={this.handleChange}>{this.state.output}</textarea>
        </form>
      </main>
    )
  }
}

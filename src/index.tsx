import * as React from 'react'
import { Component } from 'react'
import { render } from 'react-dom'
declare let require: any;

var QRCode = require('qrcode-react');
class App extends Component {
  render() {
    // return (<div><QRCode value="ศธ0513.20101(1)/" logo="https://avatars1.githubusercontent.com/u/40555076?s=460&v=4" size={300} /></div>)
    return (<div><QRCode value="ศธ0513.20101(1)/" size={300} /></div>)

  }
}

render(<App />, document.getElementById('root'))
import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Class_cmp from './Newcomponent/Class_cmp';

export default class App extends Component { 
  constructor(chpr){
    super(chpr);
    this.childdata=this.childdata.bind(this);
    this.book=this.book.bind(this);
  }
  childdata(valuuu){
    alert(valuuu);
  }
  book(author){
    alert(author);
  }
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Class_cmp name="bridgefix..." assign="success" fun={this.childdata} fun1={this.book}></Class_cmp>
        {/* <Class_cmp fun={this.book}></Class_cmp> */}

      </div>
    )
  }
}

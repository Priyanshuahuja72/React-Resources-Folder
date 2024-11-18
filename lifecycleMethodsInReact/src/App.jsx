import React, { Component } from 'react'
import Compound1 from './component/Compound1';

export default class App extends Component {
  //if we want to initial some value before dom get update so we use constructor 
  constructor(){
    super(); // to get all this value
    this.state = {
      count: 0
    }
  }
  //when component render first time than this will work 
  // componentDidMount(){
  //   console.log(`Component render`)
  // }

  //whatever function we create in a functional component we basically create a method.
  increament(){
   this.setState({count : this.state.count + 1})
  }
  
  //it is also a lifeCycle Method
  render() {
    return (
      <div>
        <Compound1 count= {this.state.count}/>
        <div className="count-btn-sec"><button onClick={() => this.increament()}>Increament</button></div>
      </div>
    )
  }
}

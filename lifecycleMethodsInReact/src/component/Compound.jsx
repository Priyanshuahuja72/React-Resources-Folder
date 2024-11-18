import React, { Component } from 'react'

export default class Compound extends Component {

  //second lifeCycle method = whenever the component will updated
  componentDidUpdate(prevprops, prevState){
    console.log(prevprops.count);
    console.log(this.props.count);
    if(prevprops.count !== this.props.count){
      console.log("Component is updated")
    }
  }
  render() {
    return (
      <div>{this.props.count}</div>
    )
  }
}

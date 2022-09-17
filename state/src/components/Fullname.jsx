import React, { Component } from 'react'

export default class Fullname extends Component {
    state = {
        name: "Ahmed Mehrezi"
      };
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}


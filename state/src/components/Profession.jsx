import React, { Component } from 'react'

export default class profession extends Component {
    state = {
        profession: "Photograph"
      };
  render() {
    return (
      <div>{this.state.profession}</div>
    )
  }
}

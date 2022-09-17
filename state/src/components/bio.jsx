import React, { Component } from 'react'

export default class bio extends Component {
    state = {
        bio: "17 years old✨"
      };
  render() {
    return (
      <div>{this.state.bio}</div>
    )
  }
}

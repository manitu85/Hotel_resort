import React, { Component } from 'react'
import { RoomContext } from '../context'

class FeaturedRooms extends Component {

  static contextType = RoomContext;

  render() {
    const { greetings, name } = this.context;
    // console.log(value)
    return (
      <div>
        <h1>{greetings} Featured rooms</h1>
      </div>
    )
  }
}

export default FeaturedRooms

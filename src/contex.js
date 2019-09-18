import React, { Component, createContext } from 'react'

const RoomContex = createContext();

class RoomProvider extends Component {

  state = {

  }

  render() {
    // const children = this.props.children;
    return (
      <RoomContex.Provider value={'hello'}>
        {this.props.children}
      </RoomContex.Provider>
    )
  }
}

const RoomConsumer = RoomContex.Consumer ;

export {RoomProvider, RoomConsumer, RoomContex}
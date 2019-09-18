import React, { Component } from 'react'

const RoomContext = React.createContext();

class RoomProvider extends Component {

  state = {
    greetings: 'Hello World From Serbia',
  }

  render() {
    const children = this.props.children;
    return (
      <RoomContext.Provider value={{...this.state}}>
        {children}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider, RoomConsumer, RoomContext}
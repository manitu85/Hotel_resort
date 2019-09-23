import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext()

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfase: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(items)
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price))
    let maxSize = Math.max(...rooms.map(item => item.size))
    

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    })
  }

  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)

      let room = { ...item.fields, images, id }
      return room;
    })

    return tempItems;
  }

  // getData

  getRoom = slug  => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room
  }

  handleChange = e => {
    const type = e.target.type
    const name = e.target.name
    const value  = e.target.value

    console.log(type, name ,value);
  }

  filterRooms = () => {
    console.log('hello')
  }

  render() {
    const children = this.props.children;
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
        {children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer

// HOC 
export const withRoomConsumer = Component => {
  return props => {
    return <RoomConsumer>
      {value => <Component {...props} contex={value} /> }
    </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext }



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
    capacity: 0,
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
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {[name]: value},
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state
    // all the rooms
    let tempRooms = [...rooms]
    // Transform the values
    capacity = parseInt(capacity)
    price = parseInt(price)

    // filter by type
    if(type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by capacity
    if(capacity !==1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price)

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize  )

     // filter by extras (breakfast and pets)
     if(breakfast) {
       tempRooms = tempRooms.filter(room => room.breakfast === true)
     }

     if(pets) {
       tempRooms = tempRooms.filter(room => room.pets === true)
     }
   
    // change state
    this.setState({
      sortedRooms: tempRooms
    });
  };


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

// HOC helper function
export const withRoomConsumer = Component => {
  return props => {
    return <RoomConsumer>
      {value => <Component {...props} contex={value} /> }
    </RoomConsumer>
  }
}

export { RoomProvider, RoomConsumer, RoomContext }



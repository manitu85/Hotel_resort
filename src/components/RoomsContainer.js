import React, { Component } from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading';



const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {
        (value) => {
          const { loading, sortedRooms, rooms } = value
          
          if(loading) {
            return <Loading />
          } else {
            return (
              <div>
                Hello from container
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
              </div>
            )
          }
        }
      }
    </RoomConsumer>
  )
}

export default RoomsContainer

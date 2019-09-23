import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from '../context'
import Loading from './Loading'


const RoomContainer = ({contex}) => {
  const { loading, sortedRooms, rooms } = contex;
  // console.log(contex)

  if (loading) {
    return <Loading />
    } else {
      return (
        <>
          <RoomFilter rooms={rooms} />
          <RoomList rooms={sortedRooms} />
        </>
      )
    }
}


export default withRoomConsumer(RoomContainer)

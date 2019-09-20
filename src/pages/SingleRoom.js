import React, { Component } from 'react'
import defaultImg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context'
import StyledHero from '../components/StyledHero'


class SingleRoom extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg   
    }
  }

  static contextType = RoomContext
  
  render() {
    const { getRoom } = this.context
    const room = getRoom(this.state.slug)
    
    if(!room) {
      return <div className='error'>
        <h3>No such room could be found</h3>
        <Link to='/room' className='btn-primary'>
          Back to rooms
        </Link>
      </div>
    }

    const {name, description, capacity, size, price, extras, breakfast, pets, images } = room;

    return (
      <>
        <StyledHero img={images[0] || this.state.defaultImg }>
          <Banner title={`${name} room`} >
            <Link to='/rooms' className='btn-primary' >
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {images.map((item, idx) => {
              return <img key={idx}  src={item} alt={name}/ >
            })}
          </div>
        </section>
      </>
    )
  }
}

export default SingleRoom

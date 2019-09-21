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
    const [mainImg, ...defaultImg] = images;
    // console.log(defaultImg);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultImg }>
          <Banner title={`${name} room`} >
            <Link to='/rooms' className='btn-primary' >
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, idx) => {
              return <img key={idx}  src={item} alt={name}/ >
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>Detailes</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>Info</h3>
              <h6>price: &euro;{price}</h6>
              <h6>size: {size} SQM</h6>
              <h6>
                max capacity: {' '}
                  { capacity > 1 ? `${capacity} people` : `${capacity} person` }
              </h6>
              <h6>
                { pets ? 'pets allowed' : 'no pets allowed' }
              </h6>
              <h6>
                { breakfast && 'free breakfas included' }
              </h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>Extras</h6>
            <ul className='extras'>
              { 
                extras.map((item, idx) => {
                  return <li key={idx}>{item}</li>
                })
              }
            </ul>
        </section>
      </>
    )
  }
}

export default SingleRoom

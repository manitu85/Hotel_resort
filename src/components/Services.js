import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'



class Services extends Component {

  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Coctails',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste magni, repellendus earum maiores impedit? '
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste magni, repellendus earum maiores impedit? '
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Shuttle',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste magni, repellendus earum maiores impedit? '
      },
      {
        icon: <FaBeer />,
        title: 'Stronges Beer',
        info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste magni, repellendus earum maiores impedit? '
      }
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title  title='services'/>
        <div className='services-center'>
          {
            this.state.services.map((item, idx) => {
              return (
                <article key={idx} className='service'>
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              )
            })
          }
        </div>
      </section>
    )
  }
}

export default Services

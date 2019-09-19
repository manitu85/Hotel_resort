import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img 
        style={{width: '6rem'}}
        src={loadingGif} 
        alt='loading...'
      />
      <h4>rooms data loading...</h4>
    </div>
  )
}

export default Loading 

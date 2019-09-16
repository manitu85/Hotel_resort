import React from 'react'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'

const App = () => {
  return (
    <div>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </div>
  );
}

export default App

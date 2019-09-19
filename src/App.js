import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RoomProvider } from './context';

import Navbar from './components/Navbar';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/Error'


const App = () => {
  return (
    <RoomProvider> 
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/rooms' component={Rooms} />
            <Route exact path='/rooms/:slug' component={SingleRoom} />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </>
      </Router>
    </RoomProvider>
  );
}

export default App

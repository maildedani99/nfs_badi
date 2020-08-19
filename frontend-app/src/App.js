import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexView from './pages/index.view/index.view';
import RoomsView from './pages/rooms.view/rooms.view';
import ListRoom from './components/listRoom/listRoom.view';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <IndexView />
          </Route>
          <Route exact path="/roomsview">
            <RoomsView />
          </Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;

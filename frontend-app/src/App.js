import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing/landing.view";
import Navbar from "./components/navbar/navbar";
import LoginPage from './pages/login/login.view';
import RegisterForm from "./pages/register/register.view";
import RoomsPage from "./pages/rooms/rooms.view";


function App() {
    return (
      <div>
        <Router>
          <Navbar search="present" register="present" login="present" publicRoom="present"/>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/loginpage">
              <LoginPage />
            </Route>
            <Route exact path="/registerpage">
              <RegisterForm />
            </Route>
            <Route exact path="/habitaciones">
              <RoomsPage />
            </Route>
          </Switch>

        </Router>
      </div>
  );
}

export default App;

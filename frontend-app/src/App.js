import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing/landing.view";
import Navbar from "./components/navbar/navbar";
import LoginPage from './pages/login/login.view';
import RegisterForm from "./pages/register/register.view";
import RoomsPage from "./pages/rooms/rooms.view";
import {HABITACIONES, LANDING, LOGINPAGE, REGISTERPAGE} from "./routes/routes";


function App() {
    return (
      <div>
        <Router>
          <Navbar search="present" register="present" login="present" publicRoom="present"/>
          <Switch>
            <Route exact path={LANDING}>
              <LandingPage />
            </Route>
            <Route exact path={LOGINPAGE}>
              <LoginPage />
            </Route>
            <Route exact path={REGISTERPAGE}>
              <RegisterForm />
            </Route>
            <Route exact path={HABITACIONES}>
              <RoomsPage />
            </Route>
          </Switch>

        </Router>
      </div>
  );
}

export default App;

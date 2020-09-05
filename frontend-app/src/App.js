import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing/landing.view";
import Navbar from "./components/navbar/navbar";
import LoginPage from './pages/login/login.view';
import RegisterForm from "./pages/register/register.view";
import RoomsPage from "./pages/rooms/rooms.view";
import {HABITACIONES, LANDING, LOGINPAGE, REGISTERPAGE, TERMINOS, POLITICA} from "./routes/routes";
import Terminos from "./pages/terminos/terminos";
import Politica from "./pages/politica/politica";


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
            <Route exact path={TERMINOS}>
              <Terminos />
            </Route>
            <Route exact path={POLITICA}>
              <Politica />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;

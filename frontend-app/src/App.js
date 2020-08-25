import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing/landing.view";
import Navbar from "./components/navbar/navbar";
import ListRoom from "./components/listRoom/listRoom.view";
import LoginPage from './pages/login/login.view';
import RegisterForm from "./pages/register/register.view";


function App() {
    return (
      <div>
        <Router>
          <Navbar/>

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
              <ListRoom />
            </Route>
          </Switch>

        </Router>
      </div>
  );
}

export default App;

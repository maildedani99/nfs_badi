import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from "./contexts/authentication/authentication.context";
import { UploadPhotoProvider } from "./contexts/uploadphoto_context";
import LandingPage from "./pages/landing/landing.view";
import Navbar from "./components/navbar/navbar";
import LoginPage from './pages/login/login.view';
import RegisterForm from "./pages/register/register.view";
import RoomsPage from "./pages/rooms/rooms.view";
import RoomForm from './pages/room_form/room_form.view';
import {
  HABITACIONES,
  LANDING,
  LOGINPAGE,
  REGISTERPAGE,
  TERMINOS,
  POLITICA,
  ROOMFORM,
  ROOMDETAIL,
  RESERVAS,
  PERFIL
} from "./routes/routes";
import Terminos from "./pages/terminos/terminos";
import Politica from "./pages/politica/politica";
import RoomDetail from "./pages/room_detail/roomDetail.view";
import ReservesPage from "./pages/reserves/reservesPage.view";
import PerfilUser from "./pages/perfilUser/perfilUser.view";

// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

function App() {

    return (
        <SimpleReactLightbox>
        <AuthContextProvider>
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
              <Route exact path={TERMINOS}>
                <Terminos />
              </Route>
              <Route exact path={POLITICA}>
                <Politica />
              </Route>
              <PrivateRoute exact path={ROOMFORM}>
                <UploadPhotoProvider>
                  <RoomForm />
                </UploadPhotoProvider>
              </PrivateRoute>
              <PrivateRoute exact path={RESERVAS}>
                <ReservesPage />
              </PrivateRoute>
              <Route exact path={HABITACIONES}>
                <RoomsPage />
              </Route>
              <Route exact path={ROOMDETAIL}>
                <RoomDetail />
              </Route>
              <Route exact path={PERFIL}>
                <PerfilUser />
              </Route>
            </Switch>
          </Router>
        </AuthContextProvider>

        </SimpleReactLightbox>
  );
}

function PrivateRoute(props) {
  const {state} = React.useContext(AuthContext);
  const {children, path} = props;
  return (
      <Route path={path}>
        {state.isAuthenticated ? (children) : <Redirect to={{pathname: LOGINPAGE}}/>}
      </Route>
  );
}

export default App;

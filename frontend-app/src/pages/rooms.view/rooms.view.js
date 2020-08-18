import React, {Fragment} from 'react';
import Navbar from '../../components/navbar/navbar';
import RoomCard from '../../components/roomCard/roomCard.view';

const RoomsView = () => {
  return (
    <Fragment>
          <h3>(esta es la pagina de marcos que se renderiza dentro index.view)</h3>
          <div className="container-flex">
            <div className="row">
              <div className="col-3">
          <RoomCard />
            </div>
            <div className="col-3">
          <RoomCard />
              </div>
            </div>
              <div className="col-3">
          <RoomCard />
            </div>
          </div>
    </Fragment>
  );
};

export default RoomsView;

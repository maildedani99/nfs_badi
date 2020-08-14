import React, { Fragment } from 'react';
import Navbar from '../../components/navbar/navbar';
import RoomCard from '../../components/roomCard/roomCard.view';
import RoomsView from '../rooms.view/rooms.view';

const IndexView = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="jumbotron text-center">
        <h2>Encuentra tu habitación ideal</h2>
      </div>
      <RoomsView />
    </Fragment>
  );
};

export default IndexView;

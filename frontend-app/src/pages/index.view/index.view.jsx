import React, {Fragment} from 'react';
import Navbar from '../../components/navbar/navbar';
import RoomCard from '../../components/roomCard/roomCard.view';

const IndexView = () => {
  return (
    <Fragment>
          <Navbar />
          <div className="index__main">
              <div className="col-3">
          <RoomCard />
            </div>
            <div className="col-3">
          <RoomCard />
              </div>
              <div className="col-3">
          <RoomCard />
            </div>
          </div>
    </Fragment>
  );
};

export default IndexView;

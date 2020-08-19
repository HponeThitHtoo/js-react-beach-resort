/**
 * Higher Order Component Way
 */

import React from 'react';

import {withRoomConsumer} from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

function RoomsContainer({context}) {
  // console.log(context);
  const { loading, sortedRooms, rooms } = context;
  
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);







/**
 * Normal Way
 */

/* import React from 'react';

import {RoomConsumer} from '../context';
import Loading from './Loading';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';


export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => {
        // console.log(value);
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <div>
            Hello From Rooms Container
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }} 
    </RoomConsumer>
  );
} */
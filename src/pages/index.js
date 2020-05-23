import React from "react"
import Layout from './../components/layout';
import HotelImage from "../components/hotelImage";
import StartContent from './../components/startcontent';
import useRooms from './../hooks/useRooms';
import {css} from '@emotion/core'
import RoomPreview from './../components/roomPreview';

const IndexPage = () => {

  const rooms  = useRooms();

  console.log(rooms)
  
    return(
      <Layout>
        <HotelImage />
        <StartContent />
        <h2 css={css` text-align: center; margin-top: 5rem; font-size: 3rem;`}>
          Our Rooms
        </h2>
        <ul>
          {rooms.map(room =>(
            
            <RoomPreview 
              key={room.id}
              room={room}
            />

          ))}
        </ul>
      </Layout>
    )
  
  
}

export default IndexPage

import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGV2bWVodGE3ODciLCJhIjoiY2w4NmJkZDB5MHh1ZzNxczI0cHFtcXljOCJ9.FTLIeFYdqzuQLX4fCTI3Dg";

const Map = () => {
  // console.log(props);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [75.554729, 20.70651],
      zoom: 5,
    });
  }, []);
  // useEffect(() => {
  //   console.log(props.pickupCoordinates);
  //   console.log(props.dropoffCoordinates);
  //   if(pickupCoordinates){
  //     addToMap(map)
  //   }
  // },);

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
flex-1
`;

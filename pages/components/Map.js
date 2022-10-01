import React from "react";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGV2bWVodGE3ODciLCJhIjoiY2w4NmJkZDB5MHh1ZzNxczI0cHFtcXljOCJ9.FTLIeFYdqzuQLX4fCTI3Dg";

const Map = (props) => {
  // console.log(props);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [75.554729, 20.70651],
      zoom: 50,
    });
    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickupCoordinates, props.dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };
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
flex-1 h-1/2
`;

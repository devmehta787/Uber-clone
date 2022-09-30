import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useEffect, useState } from "react";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = "Jamshedpur";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGV2bWVodGE3ODciLCJhIjoiY2w4NmJkZDB5MHh1ZzNxczI0cHFtcXljOCJ9.FTLIeFYdqzuQLX4fCTI3Dg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
        // console.log("Pickup");
        // console.log(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = "Chennai";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZGV2bWVodGE3ODciLCJhIjoiY2w4NmJkZDB5MHh1ZzNxczI0cHFtcXljOCJ9.FTLIeFYdqzuQLX4fCTI3Dg",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
        // console.log("Dropoff");
        // console.log(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        {pickupCoordinates}
        {dropoffCoordinates}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;

const RideContainer = tw.div`
flex-1
`;

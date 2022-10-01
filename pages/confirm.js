import tw from "tailwind-styled-components";
import { React, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Map from "./components/Map";
import RideSelector from "./components/rideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  console.log("Pickup:", pickup);
  console.log("DropOff:", dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Jamshedpur";
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

  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "Chennai";
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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      {/* <ButtonContainer> */}
      <Link href="/">
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </Link>
      {/* </ButtonContainer> */}
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        {/* {pickupCoordinates}
        {dropoffCoordinates} */}
        <RideSelector />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
flex h-screen flex-col
`;
// const ButtonContainer = tw.div`
// bg-white px-4
// `;
const BackButton = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3 cursor-pointer hover:scale-110 transition
`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;
const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
flex flex-col bg-black text-white text-xl items-center mt-10 py-3 mx-4 cursor-pointer transform rounded-md
`;

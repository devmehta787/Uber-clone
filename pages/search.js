import { React, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  //   console.log(pickup, dropoff);

  return (
    <Wrapper>
      {/* Button container */}
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      {/* Input container */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <Plus src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmLocation>Confirm Location</ConfirmLocation>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200

`;
const ButtonContainer = tw.div`
bg-white px-4 
`;
const BackButton = tw.img`
h-12 cursor-pointer hover:scale-110 transition
`;
const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center
`;
const InputContainer = tw.div`
flex bg-white items-center px-4 mb-2
`;
const Circle = tw.img`
h-2.5
`;
const Line = tw.img`
h-10
`;
const Square = tw.img`
h-2.5
`;
const InputBoxes = tw.div`
flex flex-col flex-1 
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none rounded-md
`;
const Plus = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`;

const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`;
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;

const ConfirmLocation = tw.div`
flex flex-col bg-black text-white items-center mt-10 py-2 mx-4 cursor-pointer transform hover:scale-105 rounded-md
`;

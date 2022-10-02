import Head from "next/head";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map1";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/login");
      }
    });
  });

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>

        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
              Wheels
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              Reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <Link href="/search">
          <InputButton> Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col h-screen

`;

const ActionItems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const UberLogo = tw.img`
h-28
`;
const Profile = tw.div`
flex items-center 
`;
const Name = tw.div`
mr-4 w-20
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px cursor-pointer hover:scale-105 transition
`;

const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;
const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg hover:scale-105 transition text-xl cursor-pointer
`;

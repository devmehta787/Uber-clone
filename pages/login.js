import { React, useEffect } from "react";
import { useRouter } from "next/router";
import tw from "tailwind-styled-components";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { provider, auth } from "../firebase";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
      <Title>Login to access your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Signin with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
flex flex-col h-screen bg-200
`;
const SignInButton = tw.div`
flex flex-col bg-black text-white items-center mt-10 py-2 mx-4 cursor-pointer transform rounded-md hover:scale-105
`;
const UberLogo = tw.img`
h-20 w-auto object-contain self-start
`;
const Title = tw.div`
text-5xl pt-4 text-gray-500
`;
const HeadImage = tw.img`
object-contain w-full
`;

// import React, { useEffect } from "react";
// import tw from "tailwind-styled-components";
// import { useRouter } from "next/router";
// import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { auth, provider } from "../firebase";
// function Login(props) {
//   const router = useRouter();
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         router.push("/");
//       }
//     });
//   }, []);
//   return (
//     <Wrapper>
//       <UberLogo src={"https://i.ibb.co/ZMhy8ws/uber-logo.png"} />
//       <Title>Log in to access your account</Title>
//       <HeadImage src={"https://i.ibb.co/CsV9RYZ/login-image.png"} />
//       <SignInButton onClick={() => signInWithPopup(auth, provider)}>
//         Sign In With Google
//       </SignInButton>
//     </Wrapper>
//   );
// }
// const Wrapper = tw.div`p-4 h-screen flex flex-col bg-gray-200 dark:bg-gray-900`;
// const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full`;
// const UberLogo = tw.img`h-20 w-auto object-contain self-start`;
// const Title = tw.div`capitalize text-5xl pt-4 text-gray-400 `;
// const HeadImage = tw.img`object-contain w-full`;

// export default Login;

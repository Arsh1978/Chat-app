import React from "react";
import { Routes, Route } from "react-router-dom";
// import Questions from "../modules/questions/Questions";
import { ChatPage} from "../modules/ide/pages/chatpage";
import { SignUp } from "../shared/components/sign up";
import { Main } from "../modules/mainpage/main";
import SignIn from "../shared/components/sign in";

const Paths = () => {
  return (
    <Routes>
      <Route  path="/" element={<Main/>} />
      <Route  path="/main" element={<ChatPage/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
  );
};


export default Paths;

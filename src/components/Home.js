import React from 'react';
import { AiFillControl, AiOutlineGithub } from "react-icons/ai";
import { FcAssistant,FcSms } from "react-icons/fc";

function Home() {
  return (
    <div>
        <h1>this is home page</h1>
        <h1><AiFillControl/></h1>
        <h1><AiOutlineGithub/></h1>
        <h1><FcAssistant/></h1>
        <h1><FcSms/></h1>
    </div>
  )
}

export default Home
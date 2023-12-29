import { useState } from 'react';
import React from 'react'

import { sendMsgToOpenAI } from "./openai";


export default Open = () => {


  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  

 const send =  async ()=>{
    const msg = await sendMsgToOpenAI("hello dear")
    console.log(msg);
 }


  return (
 
<>

<button onClick={send}>check</button>
</>
  
  );
};


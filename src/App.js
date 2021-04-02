import './App.css';
import ChatListContainer from '../src/containers/chatListContainer';
import UserInfoContainer from '../src/containers/userInfoContainer';
import ThreadContainer from '../src/containers/threadContainer';
import React, { useState } from 'react';


function App() {
  const [activeu,setActiveu]=useState("");
  // activeu={userid}
  return (
    <div className="App">
      <div className= "App-content">
        <ChatListContainer setActiveu={setActiveu}/>
        <ThreadContainer activeu={activeu}/>
        <UserInfoContainer activeu={activeu}/>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import {threads} from '../threadds';
import {userInfo}  from '../userInfo';


const ChatListContainer = ({setActiveu}) => {
    
        const thread=threads.map((th)=>{
        const userid=th.userid;
        const thUsers=userInfo.find((u)=>userid===u._id);

        const chatThreads = threads.find((user)=>{
            return user["userid"]===userid;
        });

        let m;
        let k;
        if(chatThreads){
            m = chatThreads["messages"];
            k = m[m.length-1][1];
            
        }

        // console.log(thUsers);
        return (
            <div className ="classListElement" onClick={(e)=>setActiveu(thUsers._id)}>
                {thUsers.name.first}
                <p>
                    {k}
                </p>
            </div>
        )
    });
   
    return(
        <div className = "chatListContainer">
            {thread}
        </div>
    )
}

export default ChatListContainer;
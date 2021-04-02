import React from 'react';
import {threads} from '../threadds';

const ThreadContainer = ({activeu}) => {

    const chatThreads = threads.find((user)=>{
        //console.log(activeu);
        return user["userid"]===activeu;
    });
    // console.log(chatThreads);
    let m;
    const l = []
    if(chatThreads){
        m = chatThreads["messages"];
        m.forEach( (im) => {
            if(im[0]=="self"){
                l.push(<p className = "mySide"> {im[1]} </p>)
            }
            else{
                l.push(<p className= "senderSide"> {im[1]} </p>)
            }
        
        })
    }else{
        l.push(<p>Select a chat first</p>)
    }
    
    
    return (
        <div className = "threadContainer">
            {l}     
        </div>
    )
}

export default ThreadContainer;
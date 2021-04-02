import React from 'react';
import {userInfo}  from '../userInfo';

const UserInfoContainer = ({activeu}) => {
    const user = userInfo.find((us) =>  us._id === activeu );
    console.log(user);
    return (
        <div className = "userInfoContainer">
          
            {user 
            ? 
            (<><p> {user.name.first}  {user.name.last} </p>
            <p> {user.phone}  </p>
            <p> {user.about} </p></>) 
            : 
            "Select a chat then user info will be displayed"}
           
        </div>
    );
}

export default UserInfoContainer;
import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props)=>{


    // const host = "http://localhost:5000";
    const host = "https://college-tp-app-backend.onrender.com";

    const [user, setUser] = useState({});
   


      //   Create user
      const createUser = async (name, email, password)=>{
        // API Call
        const res = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await res.json();
        // console.log(json)
        setUser(json);
        return json.success
    }



    return (
        <UserContext.Provider value={{user, setUser, createUser }} >
            {props.children}
        </UserContext.Provider>
    );

}

export default UserState;
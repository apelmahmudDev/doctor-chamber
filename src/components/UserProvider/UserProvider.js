import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        success: false,
        error: ''
    })
    return (
        <div>
            <UserContext.Provider value={[user,setUser]}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};

export default UserProvider;
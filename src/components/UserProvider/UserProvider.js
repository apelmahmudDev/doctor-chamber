import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [date, setDate] = useState();
    return (
        <div>
            <UserContext.Provider value={[date, setDate]}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};

export default UserProvider;
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <UserContext.Provider value={[value, onChange]}>
                {props.children}
            </UserContext.Provider>
        </div>
    );
};

export default UserProvider;
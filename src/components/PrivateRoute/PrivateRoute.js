import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(UserContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.isSignedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}

export default PrivateRoute;
  
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, authUser, ...rest }) => {
    console.log("Public route");
    console.log(authUser);
    return (
        <Route
            {...rest}
            render={(props) =>
                !authUser ? (
                    <Component {...props} {...rest} />
                ) : (
                    <Redirect to="/dashboard" />
                )
            }
        />
    );
}

export default PublicRoute;
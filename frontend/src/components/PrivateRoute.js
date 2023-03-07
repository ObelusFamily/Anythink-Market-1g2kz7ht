import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }
      }
    />
  );
};
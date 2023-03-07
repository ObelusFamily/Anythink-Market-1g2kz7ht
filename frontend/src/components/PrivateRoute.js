import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, currentUser }) => {
  return (
    <Route
      render={props => (currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
      )
      }
    />
  );
};

export default PrivateRoute;
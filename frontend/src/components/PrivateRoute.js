import { Route, Redirect } from "react-router-dom";
import { useMemo } from "react";

const PrivateRoute = ({ component: Component, currentUser }) => {
  const renderFunction = useMemo(() => {
    return (props) =>
      currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      );
  }, [Component, currentUser]);

  return <Route render={renderFunction} />;
};

export default PrivateRoute;
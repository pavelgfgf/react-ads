import { Navigate } from "react-router";

// eslint-disable-next-line no-unused-vars
const withAuth = (WrappedComponent) => {
    const isAuthenticated = localStorage.getItem('token');

    return (props) => {
        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        }

        return <Navigate to={"/login"} />
    }
}

export default withAuth;

import { useContext } from "react";
import { AuthContex } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatRoute = ({ children }) => {

    const { user, loding } = useContext(AuthContex)
    const location = useLocation()

    if (loding) {
        return <div>
            <progress className="progress progress-primary w-56" value="0" max="100"></progress><br />
            <progress className="progress progress-primary w-56" value="0" max="100"></progress><br />
            <progress className="progress progress-primary w-56" value="10" max="100"></progress><br />
            <progress className="progress progress-primary w-56" value="40" max="100"></progress><br />
            <progress className="progress progress-primary w-56" value="70" max="100"></progress><br />
            <progress className="progress progress-primary w-56" value="100" max="100"><br /></progress>
        </div>
    }

    if (user) {

        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace={true}></Navigate>


};

export default PrivatRoute;
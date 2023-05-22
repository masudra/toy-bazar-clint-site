import { useContext } from "react";
import { AuthContex } from "../Pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatRoute = ({children}) => {

    const {user,loding} =useContext(AuthContex)
   const location =useLocation()

    if(loding){
        return
         <div>
<progress className="progress progress-secondary w-56" value="0" max="100"></progress><br/>
<progress className="progress progress-secondary w-56" value="0" max="100"></progress><br/>
<progress className="progress progress-accent w-56" value="0" max="100"></progress><br/>
<progress className="progress progress-accent w-56" value="0" max="100"></progress><br/>
<progress className="progress progress-success w-56" value="0" max="100"></progress><br/>
<progress className="progress progress-success w-56" value="0" max="100"></progress><br/>
                   </div>
    }

    if(user){

        return children;
    }
    return <Navigate state ={{from: location}} to='/login'  replace={true}></Navigate>

   
};

export default PrivatRoute;
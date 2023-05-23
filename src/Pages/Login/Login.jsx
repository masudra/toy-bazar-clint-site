import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import { useContext } from "react";
import { FaGoogle,} from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import Swal from "sweetalert2";


const Login = () => {

    const {loginUser} =useContext(AuthContex)
    const navigate = useNavigate();
     const loction =useLocation();
     console.log((loction));
     const from =loction?.state?.from?.pathname || '/'

  
    const auth = getAuth(app);
    const  googleProvider =new GoogleAuthProvider();

    const handelgooglBtn= ()=>{
        signInWithPopup(auth, googleProvider)
    
        .then(result => {
          const loginGoogle =result.user
          navigate(from,{replace: true})
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Acount  has been Creatd',
            showConfirmButton: false,
            timer: 1500
          })
    
        })
        .catch(error =>{
          alert(error.message)
        })
    }

    const handelLogin= event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password }
        console.log(user)

        loginUser(email,password)
        .then(result =>{
            const logUser = result.user
            console.log(logUser)
            navigate(from,{replace: true})
        })
        .catch(error=>{
            alert(error.message)
        })

    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handelLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Your Password" name="password" className="input input-bordered" />
          <label className="label">
           
          {/* <Link to="new-path" state={{ some: "value" }} /> */}


           <p> <span>You don,t have an account </span> <Link className="link-hover ml-10 text-xl text-blue-500" to='/regster' state={loction?.state}> Regster </Link></p> 
          </label>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary ">Login</button><br/>
          <button onClick={handelgooglBtn} className="btn btn-primary "><FaGoogle className='me-2'/>Login With Google</button>
          
        </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
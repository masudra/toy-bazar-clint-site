import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Regster = () => {

    const { creatUser, updetuser } = useContext(AuthContex)
    const navigate = useNavigate();
    const loction = useLocation()
    console.log(loction)
    const from = loction?.state?.from?.pathname || '/'
    console.log(from)

    const handelRegster = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        creatUser(email, password)
            .then(result => {
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Acount  has been Creatd',
                    showConfirmButton: false,
                    timer: 1500
                })
                updetuser(name, photo)
                    .then(result => {
                        const logUser = result.user
                        navigate(from, { replace: true })


                    })
                    .catch(error => {
                        alert(error.message)
                    })

            })
            .catch(error => {
                alert(error.message)
            })




    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handelRegster}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Enter Your Photo" name="photo" className="input input-bordered" />

                                </div>
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

                                        <p> <span>if you have an account please  </span> <Link className="link-hover ml-10 text-xl text-blue-500" to='/login'>Login</Link></p>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary ">Regster</button><br />
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Regster;
import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(AuthContex)

    const handellogoutBtn = () => {
        logout()
            ?.then(result => { })
            .catch(error => {
                alert(error.message)
            })

    }

    return (
        <div>
            <div className="navbar  bg-slate-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/alltoys'>All Toys</Link></li>
                            {user?
                                <><li><Link to='/mytoy'>My Toys</Link></li>
                                <li><Link to='/addtoy'>Add A Toy</Link></li>
                                </>:<></>
                            }
                            <li><Link to='/blog'>Blog</Link></li>
                            <img className="w-10 rounded-full" src={user?.photoURL
                            } />

                            <li>
                                {user ?<button onClick={handellogoutBtn} className="mx-4 mr-8">LogOut</button>: <Link to='/login'> <button className="mx-4">Login</button></Link>
                                }
                            </li>
                        </ul>

                    </div>
                    <Link to='/'><img className="w-20" src={logo} alt="" /> </Link>
                    <Link to='/'><h5 className=" normal-case text-xl">TOY BAZAR</h5></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        {user?
                                <><li><Link to='/mytoy'>My Toys</Link></li>
                                <li><Link to='/addtoy'>Add A Toy</Link></li>
                                </>:<></>
                            }
                        <li><Link to='/blog'>Blog</Link></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-56">
                            <div className=" rounded-full">
                               {user? <img src={user?.photoURL} />:<></>
                               }
                            </div>
                        </label>
                        <li className="ml-3 mr-10">

                            {user ? <button onClick={handellogoutBtn} className="mx-1">LogOut</button> : <Link to='/login'> <button className="mx-4">Login</button></Link>
                            }
                        </li>

                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <button className="mx-4">Login</button>
                    <button className="mx-4 mr-8">LogOut</button>
                </div> */}
            </div>

        </div>
    );
};

export default Navbar;
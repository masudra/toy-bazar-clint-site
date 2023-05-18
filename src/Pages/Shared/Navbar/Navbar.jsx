import { Link } from "react-router-dom";
import logo from '../../../../public/logo.png'
const Navbar = () => {
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
                            <li><Link to='/mytoy'>My Toys</Link></li>
                            <li><Link to='/addtoy'>Add A Toy</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <img className="w-10 rounded-full" src="../../../../public/245382285_1084955178910889_2518374623584841612_n.jpg" />

                            <li>
                                <img className="w25 rounded" src="" alt="" />
                                <button className="mx-4">Login</button>
                                <button className="mx-4 mr-8">LogOut</button>
                            </li>
                        </ul>

                    </div>
                    <img className="w-20" src={logo} alt="" />
                    <a className="btn btn-ghost normal-case text-xl">TOY BAZAR</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/mytoy'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add A Toy</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar ml-56">
                            <div className=" rounded-full">
                                <img src="../../../../public/245382285_1084955178910889_2518374623584841612_n.jpg" />
                            </div>
                        </label>
                        <li className="ml-3 mr-10">

                            <button className="mx-1">Login</button>
                            <button className="mx-1">LogOut</button>
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
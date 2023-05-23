import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="lg:mx-10 my-4">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
            
        </div>
    );
};

export default Main;
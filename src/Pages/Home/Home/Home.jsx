import { useLoaderData } from "react-router-dom";
import Gallery from "../../Gallery/Gallery";
import Banner from "../Banner/banner";
import Alltoys from "../../Toys/AllToys/Alltoys";

const Home = () => {

    
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>

           
        </div>
    );
};

export default Home;
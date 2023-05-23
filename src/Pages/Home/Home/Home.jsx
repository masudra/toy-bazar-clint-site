import { useLoaderData } from "react-router-dom";
import Gallery from "../../Gallery/Gallery";
import Banner from "../Banner/banner";
import Alltoys from "../../Toys/AllToys/Alltoys";
import UpComingToys from "../../../ExtaSec/UpComingToys";
import TopSeler from "../../../ExtaSec/TopSeler";

const Home = () => {

    
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <UpComingToys></UpComingToys>
            <TopSeler></TopSeler>

           
        </div>
    );
};

export default Home;
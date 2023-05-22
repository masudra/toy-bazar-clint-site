import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import MyToysDeatels from "./MyToysDeatels";

const Mytoy = () => {
    const { user } = useContext(AuthContex)
    const [mytoy,settoy ] = useState([])
    console.log(mytoy)


    const url = `http://localhost:5000/alltoysdatas?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => settoy(data))
    }, [])


    return (
        
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            
                            <th>Number</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {/* {
                            alldatas?.map(mytoydata => <MyToysDeatels
                                 key={mytoydata?._id}
                                 mytoydata={mytoydata}
                                 ></MyToysDeatels>)
                        } */}
                        
                      
                    </tbody>

                </table>

                <h1>{mytoy.length}</h1>
            </div>


    );
};

export default Mytoy;
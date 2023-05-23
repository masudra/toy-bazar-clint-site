import { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const Alltoys = () => {
    const [allToysData, setAllToysData] = useState([])

    useEffect(() => {
        fetch('https://toy-bazar-server-site.vercel.app/alltoysdata')
            .then(res => res.json())
            .then(data => setAllToysData(data))

    }, [])

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Photo</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToysData?.map((alltoys ,index )=> <Toys key={alltoys?._id} alltoys={alltoys} index={index+1}></Toys>)
                        }
                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default Alltoys;
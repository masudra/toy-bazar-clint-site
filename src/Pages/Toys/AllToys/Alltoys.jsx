import { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const Alltoys = () => {
    const [allToysData, setAllToysData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoysdata')
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
                            allToysData?.map(alltoys => <Toys key={alltoys?._id} alltoys={alltoys} index={alltoys.index}></Toys>)
                        }
                    </tbody>

                </table>
            </div>



        </div>
    );
};

export default Alltoys;
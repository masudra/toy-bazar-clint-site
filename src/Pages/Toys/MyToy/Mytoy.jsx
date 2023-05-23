import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import MyToysDeatels from "./MyToysDeatels";
import Swal from "sweetalert2";

const Mytoy = () => {
    const { user } = useContext(AuthContex)
    const [mytoy, settoy] = useState([])

    const url = `https://toy-bazar-server-site.vercel.app/alltoysdatas?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => settoy(data))
    }, []);

    const handlelDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        fetch(`https://toy-bazar-server-site.vercel.app/alltoysdatas/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount >0){
                    const  remainging = mytoy.filter(toy => toy._id !== id)
                    settoy(remainging)
                }
            })

    }


    return (

        <div className="overflow-x-auto py-10">
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
                    mytoy.map((toysdata,index )=> <MyToysDeatels key={toysdata._id} index={index+1} toysdata={toysdata}  handlelDelete={ handlelDelete} ></MyToysDeatels>)

                    }


                </tbody>

            </table>
        </div>


    );
};

export default Mytoy;
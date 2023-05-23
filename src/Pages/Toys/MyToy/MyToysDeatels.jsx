import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysDeatels = ({ toysdata, index }) => {
    const { _id, Price, sellerName, toyName, Sub_category, Available_quantity } = toysdata

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
        fetch(`http://localhost:5000/alltoysdatas/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }

    return (
        <tr>
            <th>{index}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{Sub_category}</td>
            <td>{Price}</td>
            <td>{Available_quantity}</td>
            <div className='p-4'>
                <Link to={`/edit/${_id}`}><button className='ml-4 btn btn-primary'>Edit</button>
                </Link>
                <button onClick={() => handlelDelete(_id)} className='ml-4 btn btn-primary'>Delete </button>
            </div>
        </tr>

    );
};

export default MyToysDeatels;
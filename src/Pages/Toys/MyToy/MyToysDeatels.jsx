import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysDeatels = ({ toysdata, index, handlelDelete }) => {
    const { _id, Price, sellerName, toyName, Sub_category, Available_quantity } = toysdata

   

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
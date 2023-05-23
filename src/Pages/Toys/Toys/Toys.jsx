import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Toys = ({ alltoys,index }) => {
    const {photo,Price,toyName,Available_quantity,Sub_category,sellerName
    } =alltoys
    console.log(alltoys);


    return (

        <tr>
            <th>{index}</th>
            <th><img className='w-20 h-20 rounded' src={photo} alt="" /></th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{Sub_category}</td>
            <td>{Price}</td>
            <td>{Available_quantity}</td>
            <Link to={`/viewdetels/${alltoys?._id}`}><button className='btn btn-primary'>Veiw</button></Link>
        </tr>

    );
};

export default Toys;
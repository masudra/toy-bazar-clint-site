import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Toys = ({ alltoys, }) => {
    const {Price,toyName,Available_quantity,Sub_category,sellerName
    } =alltoys


    return (

        <tr>
            <th>1</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{Sub_category}</td>
            <td>{Price}</td>
            <td>{Available_quantity}</td>
            <Link to={`/viewdetels/${alltoys?._id}`}><button>Veiw</button></Link>
        </tr>

    );
};

export default Toys;
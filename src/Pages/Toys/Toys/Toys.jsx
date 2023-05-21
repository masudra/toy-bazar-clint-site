import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Toys = ({ alltoys, }) => {
    const { user} = useContext(AuthContex)

    const {_id,Price,ToyName,AvailableQuantity,SubCategory,} =alltoys
    return (

        <tr>
            <th>{}</th>
            <td>{user?.displayName}</td>
            <td>{ToyName}</td>
            <td>{SubCategory}</td>
            <td>{Price}</td>
            <td>{AvailableQuantity}</td>
            <Link ><button>Veiw</button></Link>
        </tr>

    );
};

export default Toys;
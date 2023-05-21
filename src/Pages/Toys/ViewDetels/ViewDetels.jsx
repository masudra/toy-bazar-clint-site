import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetels = () => {
    const viewData = useLoaderData()
    const {Price,ToyName,AvailableQuantity,SubCategory,} =viewData
    console.log(viewData)
    return (
        <div>
           <p>{Price}</p>
           <p>{ToyName}</p>
           <p>{AvailableQuantity}</p>
            
        </div>
    );
};

export default ViewDetels;
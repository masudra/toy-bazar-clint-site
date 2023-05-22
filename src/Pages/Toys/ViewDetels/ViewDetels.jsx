
import { useLoaderData } from 'react-router-dom';

const ViewDetels = () => {
  const viewData = useLoaderData()
  const { photo, Price, toyName, Available_quantity, Sub_category, sellerName, Detail_description, sellerEmail, Rating
  } = viewData

  console.log(viewData)

  return (
    <div>
      <div className='flex gap-10 mx-20 my-10'>
        <img src={photo} className="w-96 h-96 rounded-lg shadow-2xl" />
        <div className=' mt-6'>
          <h1 className="text-2xl"><span className='font-bold'>Toy Name: </span>{toyName}</h1>
          <h1 className="text-2xl"><span className='font-bold'>Seller Name : </span>{sellerName}</h1>
          <h1 className="text-2xl"><span className='font-bold'>Seller Email : </span>{sellerEmail}</h1>
          <h1 className="text-2xl"><span className='font-bold'>Price : </span>{Price}</h1>
          <h1 className="text-2xl"><span className='font-bold'>Rating: </span>{Rating}</h1>
          <h1 className="text-2xl"><span className='font-bold'>Available Quantity: </span>{Available_quantity}</h1>
          <p className="py-6"><span className='font-bold'>Detail Description : </span>{Detail_description}</p>

        </div>
      </div>
    </div>
  );
};

export default ViewDetels;
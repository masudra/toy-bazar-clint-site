import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const EditMyInfo = () => {
    const data  =useLoaderData();
    const { _id, Price,  Available_quantity } =data
    console.log(data)



    
    const update = event => {
        event?.preventDefault();
        const form = event?.target;
     
        const Price = form?.Price?.value
        const Available_quantity = form?.Available_quantity?.value
        const Detail_description = form?.Detail_description?.value

        const inputfildData = {  Price, Available_quantity, Detail_description }

        fetch(`http://localhost:5000/alltoysdatas${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'

            },
            body: JSON.stringify(inputfildData),

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           
        })
    }

    return (
     <div>
         <div>

<div className="card-body">
    <form onSubmit={update}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-9">
           
            {/*  */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input type="number" defaultValue={Price} placeholder="Price" name="Price" className="input input-bordered" />
            </div>
            {/*  */}
          
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available quantity</span>
                </label>
                <input type="number" defaultValue={Available_quantity} placeholder="Available quantity" name="Available_quantity" className="input input-bordered" />
            </div>
            {/*  */}

        </div>

        <div className="form-control">
            <label className="label">
                <span className="label-text">Detail description</span>
            </label>
            <input type="text"  placeholder="Detail description
" name="Detail_description" className=" h-28 input input-bordered" />
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Update Toys " />
        </div>
    </form>
</div>


</div>
    
     </div>
    );
};

export default EditMyInfo;
import { useContext } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
    const { user } = useContext(AuthContex)

    const handelForm = event => {
        event?.preventDefault();
        const form = event?.target;
        const photo = form?.photo?.value
        const toyName = form?.toyName?.value
        const sellerName = form?.sellerName?.value
        const sellerEmail = form?.sellerEmail?.value
        const Sub_category = form?.Sub_category?.value
        const Price = form?.Price?.value
        const Rating = form?.Rating?.value
        const Available_quantity = form?.Available_quantity?.value
        const Detail_description = form?.Detail_description?.value

        const inputfildData = { photo, toyName, sellerName, sellerEmail, Sub_category, Price, Rating, Available_quantity, Detail_description }
        console?.log(inputfildData);

        fetch('http://localhost:5000/alltoysdata',{
            method: 'POST',
            headers: {
                'content-type':'application/json'

            },
            body: JSON.stringify(inputfildData),

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data?.acknowledged >0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your Data has been Add',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div>

            <div className="card-body">
                <form onSubmit={handelForm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-9">
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Picture URL" name="photo" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Toy Name</span>
                            </label>
                            <input type="text"  placeholder="Toy Name" name="toyName" className="input input-bordered"required />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} placeholder="seller name" name="sellerName" disabled className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} placeholder="seller email" name="sellerEmail" disabled className="input input-bordered" required />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" placeholder="Sub-category" name="Sub_category" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" placeholder="Price" name="Price" className="input input-bordered" required />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" placeholder="Rating" name="Rating" className="input input-bordered" required/>
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number" placeholder="Available quantity" name="Available_quantity" className="input input-bordered" required />
                        </div>
                        {/*  */}

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="Detail description
" name="Detail_description" className=" h-28 input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Add Toys " />
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddToys;
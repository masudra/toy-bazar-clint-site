
const AddToys = () => {
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
                            <input type="text" placeholder="Picture URL" name="photo" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Toy Name</span>
                            </label>
                            <input type="text" placeholder="Toy Name" name="toyName" className="input input-bordered" />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller name</span>
                            </label>
                            <input type="text" placeholder="seller name" name="sellerName" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller email</span>
                            </label>
                            <input type="email" placeholder="seller email" name="sellerEmail" className="input input-bordered" />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" placeholder="Sub-category" name="Sub_category" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="Price" className="input input-bordered" />
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name="Rating" className="input input-bordered" />
                        </div>
                        {/*  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" placeholder="Available quantity" name="Available_quantity" className="input input-bordered" />
                        </div>
                        {/*  */}

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <input type="text" placeholder="Detail description
" name="Detail_description" className=" h-28 input input-bordered" />
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
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";

const Mytoy = () => {
    const { user } = useContext(AuthContex)
    const [alldatas ,setAlldatas] =useState([])

   const url =`http://localhost:5000/alltoysdata?email=${user?._id}`;
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => setAlldatas)
  },[])


    return (
        <div>
            {
                alldatas.map(m=> <p>{m.sellerEmail}</p>)
            }
        </div>
    );
};

export default Mytoy;
import logo1 from '../../public/sl1.jpg'
import logo2 from '../../public/sl2.jpg'
import logo3 from '../../public/sl3.jpg'
import logo4 from '../../public/sl4.jpg'

const TopSeler = () => {
    return (
            
      <div className=' mt-10 border'>
      <h1 className='text-center font-bold text-4xl '>Our Top Seller </h1>

        <div className='grid lg:grid-cols-4 lg:mx-auto gap-5 mt-10  mb-10  '>
          <div className="card w-[290px] h-[360px] bg-base-100 shadow-xl">
              <figure><img src={logo1} alt="Shoes" /></figure>
              <div className="card-body">
                  <h2 className="card-title"><span className='font-bold'>Name :</span>Maruf </h2>
                  <p><span className='font-bold'>Total seel:</span>212123</p>
                  <p><span className='font-bold'> Year:</span>2</p>
                  <p><span className='font-bold'>From:</span>Canada</p>
                  
              </div>
          </div>
          <div className="card w-[290px] h-[360px] bg-base-100 shadow-xl">
              <figure><img src={logo2} alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title"><span className='font-bold'>Name :</span>Rosan</h2>
              <p><span className='font-bold'>Total seel:</span>787893</p>
                  <p><span className='font-bold'> Year:</span>4</p>
                  <p><span className='font-bold'>From:</span>Japan</p>
               

              </div>
          </div>
          <div className="card w-[290px] h-[360px] bg-base-100 shadow-xl">
              <figure><img src={logo3} alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title"><span className='font-bold'>Name :</span>Jubayer </h2>
              <p><span className='font-bold'>Total seel:</span>21210023</p>
                  <p><span className='font-bold'> Year:</span>6</p>
                  <p><span className='font-bold'>From:</span>Bangladesh</p>

              </div>
          </div>
          <div className="card w-[290px] h-[360px] bg-base-100 shadow-xl">
              <figure><img src={logo4} alt="Shoes" /></figure>
              <div className="card-body">
              <h2 className="card-title"><span className='font-bold'>Name :</span>Abed</h2>
              <p><span className='font-bold'>Total seel:</span>2787653</p>
                  <p><span className='font-bold'> Year:</span>4</p>
                  <p><span className='font-bold'>From:</span>India</p>

              </div>
          </div>

      </div>
    </div>
    );
};

export default TopSeler;
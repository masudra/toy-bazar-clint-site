import logo1 from '../../public/hc1.jpg'
import logo2 from '../../public/hc2.jpg'
import logo3 from '../../public/hc3.jpg'
import logo4 from '../../public/hc5.jpg'
import logo5 from '../../public/hc7.jpg'
import logo6 from '../../public/hc21.jpg'

const UpComingToys = () => {
    return (
        
      <div className=' mt-10 border'>
        <h1 className='text-center font-bold text-4xl '> Upcoming Toys</h1>

          <div className='grid lg:grid-cols-3 lg:ml-20 gap-10 mt-10  mb-10  '>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Helicopter M-Hc200</h2>
                    
                </div>
            </div>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Helicopter M-D900</h2>
                 

                </div>
            </div>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Helicopter M-Mr09</h2>

                </div>
            </div>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Helicopter M-VB20</h2>

                </div>
            </div>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo5} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Helicopter M-MV22</h2>

                </div>
            </div>
            <div className="card w-[300px] h-[260px] bg-base-100 shadow-xl">
                <figure><img src={logo6} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Helicopter M-jk2900</h2>

                </div>
            </div>

        </div>
      </div>
    );
};

export default UpComingToys;
import logo1 from '../../../public/hc12.jpg'
import logo2 from '../../../public/hc6.jpg'
import logo3 from '../../../public/23.jpg'
import logo4 from '../../../public/hc18.jpg'
import logo5 from '../../../public/hc17.jpg'
import logo6 from '../../../public/hc20.jpg'

const Gallery = () => {
    return (
        <div className='border mt-10'>
           <h1 className='text-center font-bold text-4xl '> Gallery</h1>
            <div className='grid lg:grid-cols-6 p-5 g-5' >
            <img className='border w-40 h-40' src={logo1} alt="" />
            <img className='border w-40 h-40' src={logo2} alt="" />
            <img className='border w-40 h-40' src={logo3} alt="" />
            <img className='border w-40 h-40' src={logo4} alt="" />
            <img className='border w-40 h-40' src={logo5} alt="" />
            <img className='border w-40 h-40' src={logo6} alt="" />
        </div>
        </div>
    );
};

export default Gallery;
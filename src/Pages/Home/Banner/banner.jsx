import logo1 from '../../../../public/baner4.jpg'
import logo2 from '../../../../public/baner5.jpg'
import logo3 from '../../../../public/baner6.jpg'
import logo4 from '../../../../public/baner7.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[1200px]  ">
                {/* slider 1 */}
                <div id="slide1" className="carousel-item relative w-full h-1/2">
                    <img src={logo1} className="w-full" />
                    <div className="absolute  flex items-center h-full left-0  top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Mini Helicopter Remote Control DH-100 </h5>
                            <p>A radio-controlled helicopter (also RC helicopter) is model aircraft which is distinct from a RC airplane because of the differences in construction, aerodynamics, and flight training.</p>
                            
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 2*/}
                <div id="slide2" className="carousel-item relative w-full h-1/2">
                    <img src={logo2} className="w-full" />
                    <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>SYMA Mini RC Helicopters, S100 </h5>
                            <p>A radio-controlled helicopter (also RC helicopter) is model aircraft which is distinct from a RC airplane because of the differences in construction, aerodynamics, and flight training.</p>
                            
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 3*/}
                <div id="slide3" className="carousel-item relative w-full h-1/2">
                    <img src={logo3} className="w-full" />
                    <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Cheerwing U12S Mini RC Helicopter with Camera Remote</h5>
                            <p>A radio-controlled helicopter (also RC helicopter) is model aircraft which is distinct from a RC airplane because of the differences in construction, aerodynamics, and flight training.</p>
                            
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* slider 4*/}
                <div id="slide4" className="carousel-item relative w-full h-1/2">
                    <img src={logo4} className="w-full" />
                    <div className="absolute  flex items-center h-full left-0 right-0 top-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 ml-4 pl-12 w-1/2'>
                            <h5 className='text-5xl font-bold'>Smart RC Mini Helicopter New Released with Camera Remote Control Helicopter</h5>
                            <p>A radio-controlled helicopter (also RC helicopter) is model aircraft which is distinct from a RC airplane because of the differences in construction, aerodynamics, and flight training.</p>
                            
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            

             
        </div>
        </div>
    );
};

export default Banner;
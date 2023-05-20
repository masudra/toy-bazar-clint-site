import React from 'react';
import logo1 from '../../../public/hc1.jpg'
import logo2 from '../../../public/hc2.jpg'
import logo3 from '../../../public/hc3.jpg'
import logo4 from '../../../public/hc5.jpg'
import logo5 from '../../../public/hc7.jpg'
import logo6 from '../../../public/hc21.jpg'

const Gallery = () => {
    return (
        <div className='grid lg:grid-cols-3 lg:ml-20 gap-10 mt-10  mb-10  '>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo5} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div className="card w-[420px] h-[440px] bg-base-100 shadow-xl">
                <figure><img src={logo6} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

        </div>
    );
};

export default Gallery;
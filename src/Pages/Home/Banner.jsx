import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <div data-aos="fade-up" className="relative w-full h-96">
                <img
                    className="w-full h-full object-cover"
                    src="./pexels-nubia-navarro-(nubikini)-386010.jpg"
                    alt="Toy Cars"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black to-transparent">
                    <h1 className="text-5xl md:text-7xl sm:xl text-white font-bold mb-10 p-5">
                        Welcome to Toy Cars World!
                    </h1>
                    <p className="text-xl md:text-2xl text-white mb-10">
                        Explore our wide range of <br /> amazing toy cars.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
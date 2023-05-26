import React from 'react';

const Sections = () => {
    return (
        <div>
            <section className="relative py-16 my-20 drop-shadow-lg">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover"
                    style={{ backgroundImage: 'url("/toy-car-background.jpg")' }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-900 to-transparent opacity-75"></div>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src="/pexels-nubia-navarro-(nubikini)-385997.jpg"
                                alt="Toy Car Image"
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Add Feature Section */}
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4 text-black">Customize Your Toy Car</h2>
                            <p className="text-white-200 mb-6">
                                Take your toy car to the next level with a range of exciting features and accessories.
                                From remote control capabilities to realistic engine sounds, create a personalized toy car
                                that will provide hours of fun and entertainment.
                            </p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                Explore Features
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative w-full h-96 mb-1 drop-shadow-lg">
                <img
                    className="w-full h-full object-cover"
                    src="./360_F_162159474_fLZzG2KyXQHOAQMSQnP9sPPG0IMu4i2Z.jpg"
                    alt="Toy Cars"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black to-transparent mb-10">
                    <h1 className="text-5xl md:text-4xl text-white font-bold">
                        Grand Opening of Our Shop!
                    </h1>
                    
                    
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-400 to-red-400 py-4">
                <p className="text-xl md:text-xl text-white text-center mb-1">
                        You and your babies are invited <br /> Date: 12 July 2023 <br />
                        Venue: Super Market, Dhaka, Bangladesh
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sections;
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Titles from '../../Helmet/Titles';

const ToyDetails = () => {
    const detail = useLoaderData()
    console.log(detail);
    const { pictureUrl, name, sellerName, sellerEmail, price, rating, quantity, description } = detail;





    return (
        <div className="flex items-center justify-center m-5">
            <Titles title='ToyCarHub | Toy Details'></Titles>


            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={pictureUrl} alt={name} className="w-full h-auto rounded-t-lg" /></figure>
                <div className="card-body">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600 font-semibold">Seller:</p>
                            <p className="text-gray-800">{sellerName}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Seller Email:</p>
                            <p className="text-gray-800">{sellerEmail}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Price:</p>
                            <p className="text-gray-800">${price}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Rating:</p>
                            <p className="text-gray-800">{rating}/5</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold">Available Quantity:</p>
                            <p className="text-gray-800">{quantity}</p>
                        </div>

                    </div>
                    <p className="text-gray-600 mb-4"></p>
                    <p className="text-gray-600 font-semibold">Product Description:</p>
                    <p className="text-gray-800">{description}</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
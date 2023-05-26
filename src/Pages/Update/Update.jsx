import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../LogIn & SignUp/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import Titles from '../../Helmet/Titles';

const Update = () => {

    const data = useLoaderData()

    const { user } = useContext(AuthContext);
    console.log();

    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState(data.name);
    const [price, setPrice] = useState(data.price);
    const [rating, setRating] = useState('');
    const [sellerName, setSellerName] = useState(user ? user.displayName : '');
    const [sellerEmail, setSellerEmail] = useState(user ? user.email : '');
    const [subcategory, setSubcategory] = useState(data.subcategory);
    const [quantity, setQuantity] = useState(data.quantity);
    const [description, setDescription] = useState(data.description);
    const notify = () => toast.success('Successfully Added!');

    const handleUpdate = (e) => {
        e.preventDefault();


        const newToy = { pictureUrl, name, price, rating, sellerName, sellerEmail, subcategory, quantity, description };
        console.log(newToy);

        fetch(`https://toy-store-server-seven.vercel.app/toys/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    return notify();
                }
            })

    };

    return (
        <div>
            <div className="flex justify-center items-center m-5">
                <Titles title='ToyCarHub | Toy Update'></Titles>
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                />
                <div className="bg-gray-200 p-8 rounded shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                    <h1 className="text-2xl font-bold mb-4">Update {name}</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-2 gap-4">


                            <div>
                                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    className="border border-gray-300 rounded w-full p-2"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>




                            <div>
                                <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">
                                    Available Quantity
                                </label>
                                <input
                                    type="number"
                                    id="quantity"
                                    className="border border-gray-300 rounded w-full p-2"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    className="border border-gray-300 rounded w-full p-2"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded mt-4"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
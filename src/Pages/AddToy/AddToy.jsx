import React, { useContext, useState } from 'react';
import { AuthContext } from '../LogIn & SignUp/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import Titles from '../../Helmet/Titles';


const AddToy = () => {

    const { user } = useContext(AuthContext);



    console.log();

    const [pictureUrl, setPictureUrl] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerEmail, setSellerEmail] = useState(user ? user.email : '');
    const [subcategory, setSubcategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const notify = () => toast.success('Successfully Added!');

    const handleFormSubmit = (e) => {
        e.preventDefault();


        const newToy = { pictureUrl, name, price, rating, sellerName, sellerEmail, subcategory, quantity, description };
        console.log(newToy);

        fetch('https://toy-store-server-seven.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    return notify();
                }
            })

    };

    return (

        <div className="flex justify-center items-center m-5">
            <Titles title='ToyCarHub | Add Toy'></Titles>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <div className="bg-gray-200 p-8 rounded shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                <h1 className="text-2xl font-bold mb-4">New Toy Entry Form</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="pictureUrl" className="block text-gray-700 font-medium mb-2">
                                Picture URL
                            </label>
                            <input
                                type="text"
                                id="pictureUrl"
                                className="border border-gray-300 rounded w-full p-2"
                                value={pictureUrl}
                                onChange={(e) => setPictureUrl(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="border border-gray-300 rounded w-full p-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
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
                            <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
                                Rating
                            </label>
                            <input
                                type="number"
                                id="rating"
                                className="border border-gray-300 rounded w-full p-2"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="sellerName" className="block text-gray-700 font-medium mb-2">
                                Seller Name
                            </label>
                            <input
                                type="text"
                                id="sellerName"
                                className="border border-gray-300 rounded w-full p-2"
                                value={sellerName}
                                onChange={(e) => setSellerName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="sellerEmail" className="block text-gray-700 font-medium mb-2">
                                Seller Email
                            </label>
                            <input
                                type="email"
                                id="sellerEmail"
                                className="border border-gray-300 rounded w-full p-2"
                                value={sellerEmail}
                                onChange={(e) => setSellerEmail(e.target.value)}
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="subcategory" className="block text-gray-700 font-medium mb-2">
                                Subcategory
                            </label>
                            <select
                                id="subcategory"
                                className="border border-gray-300 rounded w-full p-2"
                                value={subcategory}
                                onChange={(e) => setSubcategory(e.target.value)}
                            >
                                <option value="">Select Subcategory</option>
                                <option value="Police Car">Police Car</option>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Truck">Truck</option>
                            </select>
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
    );
};

export default AddToy;

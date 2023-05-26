import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Titles from '../../Helmet/Titles';

const AllToys = () => {
    const [toys, setToys] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    // console.log(toys);

    const filteredToys = toys.filter((toy) =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const limitedToys = filteredToys.slice(0, 20);

    useEffect(() => {
        fetch('https://toy-store-server-seven.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div className='p-4'>
             <Titles title='ToyCarHub | All Toys'></Titles>
            <div className="overflow-x-auto">
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search toys..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-3 me-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="btn" onClick={(e) => setSearchTerm(e.target.value)}>Search</button>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {limitedToys.map((toy, index) => (
                            <tr key={toy._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.subcategory}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Link to={`/toydetails/${toy._id}`}>
                                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                                            View Details
                                        </button>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
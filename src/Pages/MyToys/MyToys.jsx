import React, { useEffect, useState } from 'react';
import { AuthContext } from '../LogIn & SignUp/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Titles from '../../Helmet/Titles';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    console.log(myToys);
    const [sorting, setSorting] = useState('')

    const handleSortChangeAsc = () => {
        setSorting('false')
    }
    const handleSortChangeDsc = () => {
        setSorting('true')
    }





    const handleDlt = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toy-store-server-seven.vercel.app/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainData = myToys.filter(myToy => myToy._id !== _id);
                            setMyToys(remainData);
                        }
                    })
            }
        })
    }



    const url = `https://toy-store-server-seven.vercel.app/toys?sellerEmail=${user?.email}&sort=${sorting}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])
    return (
        <div className='p-4'>
             <Titles title='ToyCarHub | My Toys'></Titles>
            <div className="overflow-x-auto">
                <div className="mb-4 pe-5 grid grid-cols-3">
                    <div className=''>

                    </div>
                    <div className=''>

                    </div>

                    <div className="dropdown dropdown-bottom flex justify-center">
                        <label tabIndex={0} className="btn m-1">Sort By Price</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={handleSortChangeDsc}>High to Low</a></li>
                            <li><a onClick={handleSortChangeAsc}>Low to High</a></li>


                        </ul>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {myToys.map((toy, index) => (
                            <tr key={toy._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.subcategory}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${toy.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{toy.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap grid grid-cols-3 text-center">


                                    <div>
                                        <Link to={`/toydetails/${toy._id}`}>
                                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/update/${toy._id}`}>
                                            <button className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-blue-600">
                                                Edit
                                            </button>
                                        </Link>
                                    </div> <div>
                                        <Link >
                                            <button className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-blue-600" onClick={() => handleDlt(toy._id)}>
                                                Delete
                                            </button>
                                        </Link>
                                    </div>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;

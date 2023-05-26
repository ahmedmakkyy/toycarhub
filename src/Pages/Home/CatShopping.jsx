import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AuthContext } from '../LogIn & SignUp/AuthProvider/AuthProvider';
import Login from '../LogIn & SignUp/Login';

const CatShopping = () => {

  const { user } = useContext(AuthContext);
  useEffect(() => {
    Aos.init();
  }, [])
  const [toys, setToys] = useState([])
  // const [isActive, setIsActive] = useState(false)
  const [activeTab, setActiveTab] = useState('sportsCar')


  console.log(toys);

  const handleTabSelect = (tab) => {

    setActiveTab(tab)

  }




  useEffect(() => {
    fetch(`https://toy-store-server-seven.vercel.app/${activeTab}`)
      .then(res => res.json())
      .then(data => setToys(data))
  }, [activeTab])


  

  return (


    <div data-aos="fade-right">
      <div className="flex justify-center items-center m-5">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center m-5">View by Category</h1>
          <div className="tabs font-medium">
            <a className={activeTab == 'sportsCar' ? 'tab tab-md tab-lifted tab-active ' : 'tab tab-md tab-lifted'} onClick={() => handleTabSelect('sportsCar')}>Sports Car</a>
            <a className={activeTab == 'truck' ? 'tab tab-md tab-lifted tab-active ' : 'tab tab-md tab-lifted'} onClick={() => handleTabSelect('truck')}>Truck</a>
            <a className={activeTab == 'policeCar' ? 'tab tab-md tab-lifted tab-active ' : 'tab tab-md tab-lifted'} onClick={() => handleTabSelect('policeCar')}>Police Car</a>

          </div>
        </div>
        <div className="flex flex-wrap -mx-4">

        </div>

      </div>
      <div className="flex justify-center grid md:grid-cols-3 lg:grid-cols-3  items-center g-2 m-5">
        {toys.map((toy) => (
          <div key={toy.id} className="card w-96 bg-base-100 drop-shadow-2xl m-3  ">
            <figure className="px-10 pt-10">
              <img src={toy.pictureUrl} alt="Shoes" className="rounded-xl object-contain h-48 w-96" />
            </figure>
            <div className="card-body bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
              <h2 className="card-title">{toy.name}</h2>
              <p><span className='font-semibold'>Price : </span>${toy.price}</p>
              <p><span className='font-semibold'>Rating : </span>{toy.rating}/5.0</p>
              <div className="card-actions">
            
                  <Link to={`/toydetails/${toy._id}`}><button className="btn btn-primary">View Detail</button></Link> 
              </div>
            </div>
          </div>

        )).slice(0, 3)}
      </div>

    </div>);
};

export default CatShopping;
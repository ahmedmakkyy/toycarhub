import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Pages/LogIn & SignUp/AuthProvider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isShown, setIsShown] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => { console.log(error); })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/alltoys">All Toys</Link></li>
          <li><Link to="/blog" >Blog</Link></li>
          <li>{user && <Link to="/addtoy" >Add Toy</Link>}</li>
          <li>{user && <Link to="/mytoys" >My Toys</Link>}</li>
          </ul>
        </div>

       
        
        <a href="/"> <img src="./logo2.png" alt="" style={{height:'40px', width:'140px'}}/></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
          <li><Link to="/alltoys" className="text-gray-600 hover:text-gray-800">All Toys</Link></li>
          <li><Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
          <li>{user && <Link to="/addtoy" className="text-gray-600 hover:text-gray-800">Add Toy</Link>}</li>
          <li>{user && <Link to="/mytoys" className="text-gray-600 hover:text-gray-800">My Toys</Link>}</li>




        </ul>
      </div>
      <div>

      </div>
      <div className="navbar-end">
        {isShown && <span className='text-black'> {user.displayName}</span>}
        {
          user &&
          <div className="w-10 mx-3">


            <img className='rounded-full' src={user.photoURL} onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)} />
          </div>
        }
        {user ?
          <Link to="" className="btn" onClick={handleLogOut}>Log Out</Link> :
          <Link to="/login" className="btn">Log In</Link>
        }

      </div>
    </div>

  );
};

export default Nav;

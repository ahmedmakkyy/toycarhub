import React, { useContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";



import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';
import Titles from '../../Helmet/Titles';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log('login page location :', location);
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')
  const [user, setUser] = useState(null);
  

  const handleLogIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const userLogged = result.user;
        console.log(userLogged);
        navigate(from, { replace: true })
       
      })
      .catch(error => {
        if (error.message){
          setError('User not found')
        }
      })
  }

 
// Google Login

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.log('error', error.message);
      })

  }

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Titles title="ToyCarHub | Login"></Titles>
    <div className="w-full max-w-md">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">Log in to your account</h2>

      <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleLogIn}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <button type="submit" className="btn btn-primary w-full">
              Log in
            </button>
          </div>
        </form>
        <div>
          <p>Not have an account? Please <Link className='text-blue-600' to="/signup">SignUp</Link></p>
        </div>
        <div className="flex items-center justify-center m-5">
          
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={handleGoogleSignIn}>
        Sign in with Google
      </button>
      
    </div>
      </div>
    </div>
  </div>
  );
};

export default Login;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/favicon.png';
import { authContext } from '../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

  const { logOut, user } = useContext(authContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast('successfully log out')
      }).catch((error) => {
        // An error happened.
      });
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt='' />
          <p><span className='text-red-600 text-3xl font-bold'>Doctor's</span> <span> Chamber</span></p>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>

          {
            user?.uid ? <>
              <li><Link to='/addService'>Add Service</Link></li>
              <li><Link to='/myReviews'>My Reviews</Link></li>
              <li><Link onClick={handleSignOut}>Log Out</Link></li>
            </> :
              <>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <ToastContainer />
              </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/favicon.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link className="btn btn-ghost normal-case text-xl">
        <img src={logo} alt=''/>
        <p><span className='text-red-600 text-3xl font-bold'>Doctor's</span> <span> Chamber</span></p>
        </Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
    <li><Link to='/'>Home</Link></li>
      <li><Link to='/addService'>Add Service</Link></li>
      <li><Link>My Reviews</Link></li>
      <li><Link>Login</Link></li>
      <li><Link>Log Out</Link></li>
    </ul>
  </div>
</div>
    );
};

export default Navbar;
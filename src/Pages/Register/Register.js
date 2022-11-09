import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const { createNewUser,updateUserProfile } = useContext(authContext);
    const navigate = useNavigate();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('You have successfully registered');
                form.reset();
                handleUpdateProfile(name, photoUrl)
                navigate('/login')
            })
            .catch(err => console.error(err))
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
          displayName : name,
          photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch((error)=>console.error(error))
      }
    return (
        <div className="hero w-full  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center grid md:grid-cols-2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <ToastContainer />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Register' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
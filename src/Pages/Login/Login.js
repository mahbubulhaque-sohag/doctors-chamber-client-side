import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { login, googleLogin, setLoading } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/' ;

   

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('You have successfully log in!!');
                form.reset();
              setLoading(false)
                navigate(from, {replace: true})
            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogin = (event) =>{
        event.preventDefault();
        googleLogin()
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>console.error(error))
    }

    return (
        <div className="hero w-full  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center grid md:grid-cols-2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <ToastContainer />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Login' />
                        </div>
                    </form>
                    <div className='text-center'> 
                    <input onClick={handleGoogleLogin} type='submit' className="btn btn-primary" value='Google' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
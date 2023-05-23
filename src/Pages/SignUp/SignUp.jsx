import { useContext } from 'react';
import img from '../../assets/robot_toy.png';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import UseDocumentTitle from '../UseDocumentTitle/UseDocumentTile';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    UseDocumentTitle('Toy Store | SignUp');
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserData(user, name, photoUrl);
                showToast('Account Created!');
            })
            .catch(error => console.log(error));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                showToast('Logged in with Google');
            })
            .catch(error => console.log(error));
    };

    const updateUserData = (user, name, photoUrl) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        });
    };

    const showToast = message => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-16">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl text-center font-bold italic font-serif">Sign Up now!</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form control mt-6">
                                <input className="btn btn-block btn-primary bg-pink-800 hover:bg-pink-950" type="submit" value="Sign Up" />
                                
                            </div>
                        </form>
                        <button className="btn btn-secondary" onClick={handleGoogleLogin}>SignUp with Gmail</button>
                        <p className="text-center">Already Have an Account? Please <Link className="text-pink-800 hover:text-pink-950 font-bold" to={"/login"}>Login</Link></p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

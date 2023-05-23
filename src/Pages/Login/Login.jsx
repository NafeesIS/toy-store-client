import { Link } from "react-router-dom";
import img from '../../assets/robot_toy.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseDocumentTitle from "../UseDocumentTitle/UseDocumentTile";

const Login = () => {
  UseDocumentTitle('Toy Store | Login');
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
  }

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 ">
          <h6 className="sm:text-xl md:text-4xl text-pink-800 font-bold font-serif italic pt-4 items-center ml-4">Sir, Insert Your Email & Password Correctly!</h6>
          <img className="mr-16 md:mb-16" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl text-center font-bold italic font-serif">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary bg-pink-800 hover:bg-pink-950" type="submit" value="Login In" />
              </div>
            </form>
            <button className="btn btn-primary bg-red-500 hover:bg-red-600 mt-4" onClick={handleGoogleLogin}>
              Login with Gmail
            </button>
            <p className="text-center">New to Toy Store? <Link className="text-pink-800 hover:text-pink-950 font-bold" to={"/signup"}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

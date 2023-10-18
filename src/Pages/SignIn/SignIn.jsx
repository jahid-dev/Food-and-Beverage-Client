import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const SignIn = () => {
  const { loginUser, loginGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // user login
    loginUser(email, password)
      .then((result) => {
        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    loginGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center  lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className=" card flex-shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-blue-800 underline link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-primary">Login</button>
            </div>

            <div>
              <p className="mt-5">
                If you have no account please
                <Link className="ml-2 text-blue-700 underline " to="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
          <div className="">
            <button
              onClick={handleGoogleLogin}
              className="flex cursor-pointer   mx-auto bg-gray-200 text-xl  mb-4   px-5 py-3 rounded-sm items-center "
            >
              <FcGoogle></FcGoogle> Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
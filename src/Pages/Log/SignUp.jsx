import { Link } from "react-router-dom";
import hero from "../../assets/images/login/login.png";
import facebook from "../../assets/icons/Facebook.svg";
import linkedin from "../../assets/icons/Linkedin.svg";
import google from "../../assets/icons/Google.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="grid grid-cols-2">
      <div className="my-auto">
        <img src={hero} alt="" />
      </div>
      <div className="border rounded-xl p-16">
        <h2 className="text-4xl font-semibold text-center">Sign Up</h2>
        <form className="card-body" onSubmit={handleSignUp}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-secoundry">Sign Up</button>
          </div>
        </form>

        <div>
          <h3 className="text-lg font-semibold text-center">Or Sign In with</h3>
          <div className="flex justify-center gap-4 py-8">
            <Link>
              <img src={facebook} alt="" />
            </Link>
            <Link>
              <img src={linkedin} alt="" />
            </Link>
            <Link>
              <img src={google} alt="" />
            </Link>
          </div>
        </div>
        <p className="text-lg text-center">
          Already have an account?
          <span className="font-semibold primery-color">
            <Link to="/logIn"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

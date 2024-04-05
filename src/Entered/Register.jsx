
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false)
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");

  const {createUser} = useContext(AuthContext);
  const handleRegister = event=> {
    event.preventDefault();
    // console.log(event.currentTarget);

    const form = new FormData(event.currentTarget)
    // console.log(form.get("name"));

    const name = form.get("name");
    const photo = form.get("url");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = form.get("terms");
    // console.log(name, email, photo, password, accepted);
    // validate the password
      if(password.length < 6){
        setError("Password must be 6 charecters")
      }
    //create user
    createUser(email, password)
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.log(error.message)
    })


  }
    return (
        <div className=" max-w-6xl mx-auto">
  <div className="  flex-col ">
    <div className="text-center ">
      <h1 className="text-4xl font-bold">Register your account</h1>
      
    </div>
    <div className="divider"></div>
    <div className="card shrink-0 w-full max-w-[500px] mx-auto shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-base-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="url" placeholder="Enter your photo URL" className="input input-bordered bg-base-200"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-base-200" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={show ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered bg-base-200" required />
          <span onClick={()=>setShow(!show)} className="absolute right-5 top-12">
            {
              show ? <FaEye></FaEye> :   <FaEyeSlash/>
            }
          </span>
        </div>
        <div className="flex items-center">
				<input type="checkbox" name="terms" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
				<label htmlFor="remember" className="text-sm dark:text-gray-600">Accept Term & Conditions</label>
			</div>

              {
                
              }
            <p>This is succes</p>
        <div className="form-control mt-6">
          <button className="btn bg-[#403F3F] text-white">Register</button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">Already have an account? Please
		<Link to="/login" className="underline dark:text-gray-800">Login</Link>
	</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;
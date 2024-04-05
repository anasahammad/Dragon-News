
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [accept, setAccept] = useState(false)
  const registerRef = useRef(null)

  const {createUser, emailVerify} = useContext(AuthContext);
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

    setErrorMessage("")
    setSuccess("")
      if(password.length < 6){
       return setErrorMessage(" Password should be at least 6 characters")
      }
      if(!/\d$/.test(password)){
        return setErrorMessage("Password should be one digit at the last characters")
      }
      
      
      
      
    //create user
    createUser(email, password)
    .then(result=>{
      console.log(result.user)
      setSuccess("Account Created successfully")
      emailVerify()
      .then(()=>{
         alert("Please check your email and verify your account");
      })
    })
    .catch(error=>{
      console.log(error.message)
      setErrorMessage(error.message);
    })

}
const disableBtn = ()=>{
  const checked = registerRef.current.checked;
  if(checked){
    setAccept(true)
    setErrorMessage("")
  }
  else{
   setAccept(false)
   setErrorMessage("Please select for registration")
   return
  }
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
				<input onChange={disableBtn} ref={registerRef} type="checkbox" name="terms" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
				<label htmlFor="remember" className="text-sm dark:text-gray-600">Accept Term & Conditions</label>
			</div>

              {
                errorMessage && <p className="text-red-600">{errorMessage}</p>
              }
              {
                success && <p className="text-green-700">{success}</p>
              }
           
        <div className="form-control mt-6">
          <button disabled={!accept} className="btn bg-[#403F3F] text-white">Register</button>
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
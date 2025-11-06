import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"
import {FaSpinner} from "react-icons/fa6"

function Signup() {

  const {loading, signup} = useSignup()

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96 w-full sm:w-fit sm:h-fit h-full mx-auto">
      <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:rounded-lg shadow-md bg-gray-400/10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up to
          <span className="text-blue-500"> Konekt</span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="fullname" className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input 
              type="text"
              name="fullname"
              id="fullname"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs, fullName: e.currentTarget.value}) }
              placeholder="Enter fullname"
              className="w-full input h-10"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input 
              type="text" 
              name="username"
              id="username"
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.currentTarget.value})}
              placeholder="Enter username" 
              className="w-full input h-10" 
            />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input 
              type="password" 
              name="password"
              id="password"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.currentTarget.value})}
              placeholder="Enter password" 
              className="w-full input h-10" 
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input 
              type="password" 
              name="confirmPassword"
              id="confirmPassword"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.currentTarget.value})}
              placeholder="Confirm password" 
              className="w-full input h-10" 
            />
          </div>
          <GenderCheckbox inputs={inputs} setInputs={setInputs}/>
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2">
            {loading ? <FaSpinner className="animate-spin"/> : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
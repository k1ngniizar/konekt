import { useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../../hooks/useLogin"
import { FaSpinner } from "react-icons/fa6"

function Login() {
  const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const {loading, login} = useLogin()

   const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username,password)
   }
  return (
    <div className="flex flex-col items-center justify-center sm:min-w-96 sm:h-fit h-full sm:w-fit w-full mx-auto">
      <div className="w-full h-full items-center justify-center flex flex-col p-6 sm:rounded-lg shadow-md bg-gray-400/10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login to
          <span className="text-blue-500"> Konekt</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input onChange={(e) => setUsername(e.currentTarget.value)} type="text" id="username" name="username" placeholder="Enter username" className="w-full input h-10" />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" id="password" name="password" placeholder="Enter password" className="w-full input h-10" />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Don't have an account?
          </Link>
          <button className="btn btn-block btn-sm mt-2">
            {loading ? <FaSpinner className="animate-spin"/> : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
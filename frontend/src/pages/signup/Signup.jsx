import GenderCheckbox from "./GenderCheckbox"

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400/10">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up
          <span className="text-blue-500"> Konekt</span>
        </h1>
        <form >
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input type="text" placeholder="Enter fullname" className="w-full input h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm password</span>
            </label>
            <input type="text" placeholder="Confirm password" className="w-full input h-10" />
          </div>
          <GenderCheckbox/>
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
            Already have have an account?
          </a>
          <button className="btn btn-block btn-sm mt-2">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
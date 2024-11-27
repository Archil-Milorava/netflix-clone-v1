import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <main className="hero-bg sm:w-full sm:h-screen sm:flex sm:flex-col sm:items-center">
      <header className="w-full sm:h-1/6 sm:flex sm:items-center sm:pl-56">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="" className="w-40" />
        </Link>
      </header>

      <form
        action=""
        className="bg-black/60 sm:w-[28rem] sm:h-auto sm:p-12 text-white space-y-6"
      >
        <h1 className="text-4xl font-bold">Sign In</h1>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="text"
            className="sm:w-full  py-3 px-4 bg-transparent border border-gray-700 rounded-sm text-sm text-white mt-1 focus:outline-none focus:ring-1"
            placeholder="Please Enter Email "
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            className="sm:w-full  py-3 px-4 bg-transparent border border-gray-700 rounded-sm text-sm text-white mt-1 focus:outline-none focus:ring-1"
            placeholder="Password "
          />
        </div>

        <div>
          <button className="bg-red-600 w-full p-2 rounded-sm font-semibold">
            Sign In
          </button>
        </div>

        <div className="w-full text-center">
          New to Netflix?{" "}
          <Link className="text-red-500" to={"/signup"}>
            Sign up
          </Link>
        </div>
      </form>
    </main>
  );
};

export default SignInPage;

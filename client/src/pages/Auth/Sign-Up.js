import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const SignUp = () => {
  return (
    <div>
      <Layout title={"Sign-Up"}>
        <div className="sign relative mx-auto w-svw max-w-md bg-white px-6 mt-3 pt-5 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">Sign Up</h1>
            </div>
            <div className="mt-5">
              <form>
                <div className="relative mt-6">
                  <input
                    type="text"
                    name={"name"}
                    placeholder="Enter Your Name"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transhtmlForm text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Name
                  </label>
                </div>

                <div className="relative mt-6">
                  <input
                    type="email"
                    name={"email"}
                    placeholder="Email Address"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transhtmlForm text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Email
                  </label>
                </div>
                <div className="relative mt-6">
                  <input
                    type="password"
                    name={"password"}
                    placeholder=" Password"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transhtmlForm text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Password
                  </label>
                </div>

                <div className="relative mt-6">
                  <input
                    type="number"
                    name={"phone"}
                    placeholder="Email Address"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transhtmlForm text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Phone Number
                  </label>
                </div>

                <div className="relative mt-6">
                  <input
                    type="text"
                    name={"address"}
                    placeholder=" Address"
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transhtmlForm text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
                    Address
                  </label>
                </div>

                <div className="my-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-black px-3 py-4 text-white  focus:bg-gray-600 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  already have an account !
                  <Link
                    to="login"
                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                  >
                    Login
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default SignUp;

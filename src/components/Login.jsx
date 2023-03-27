import axios from "axios";
import React, { useState, useEffect } from "react";
const Login = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    window.localStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const validRegEx = /^[^\\&']*$/;
    if (!user.match(validRegEx)) {
      setMsg("Unauthorized");
    } else {
      const json = JSON.stringify({ user: user, pwd: pwd });

      const data = async () => {
        await axios
          .post(`https://attendance-api.celcius001.repl.co/api/login`, json, {
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            if (!response.data.auth === false) {
              setMsg(response.data.message);
              localStorage.setItem("empnumber", response.data.empnumber);
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("username", response.data.username);
              localStorage.setItem("fullname", response.data.fullname);
              localStorage.setItem("accesslevel", response.data.accesslevel);
              window.location.reload(true);
            }
            setMsg(response.data.message);
          })
          .catch((error) => {
            if (error["message"] === "Network Error") {
              setMsg(error["message"]);
            } else {
              setMsg(error["response"]["data"]);
            }
          });
      };
      data();
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 antialiased py-6 flex justify-center items-center sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-gray-500 rounded-t-md"></div>
          <div className="px-8 py-6">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className="block font-semibold">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password" className="block font-semibold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-gray-500 rounded-md"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <span className="flex items-center justify-center pt-2">
                {msg}
              </span>
              <div className="flex items-center justify-center">
                <button className="mt-4 bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition-all ease-in-out duration-500">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

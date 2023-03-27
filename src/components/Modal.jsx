import React, { useState } from "react";
import axios from "axios";

const Modal = ({ visible, onClose }) => {
  const [newPwd, setNewPwd] = useState("");
  const [confPwd, setConfPwd] = useState("");

  const [confirm, setConfirm] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPwd === confPwd) {
      setErr(true);
      setConfirm(true);
    } else {
      setErr(false);
      setConfirm(false);
      setErrMsg("Unmatched Password");
    }
  };

  const handleConfirm = () => {
    const UserName = window.localStorage.getItem("username");
    const json = JSON.stringify({ user: UserName, pwd: newPwd });
    const data = async () => {
      await axios
        .post(
          `https://attendance-api.celcius001.repl.co/api/admin/update/user`,
          json,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          window.location.reload(true);
          window.localStorage.clear();
          console.log(response.status);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    data();
  };

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded w-72">
        {!confirm ? (
          <h1 className="font-semibold text-center text-xl text-gray-700 mb-2">
            Change Password
          </h1>
        ) : (
          <h1 className="font-semibold text-center text-xl text-gray-700 mb-2">
            Please Confirm to Save Changed Password
          </h1>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="password"
              className="border border-gray-700 p-2 rounded mb-5"
              placeholder="New Password"
              required
              onChange={(e) => setNewPwd(e.target.value)}
              readOnly={confirm}
            />
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              className="border border-gray-700 p-2 rounded mb-5"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfPwd(e.target.value)}
              readOnly={confirm}
            />
          </div>
          {!err ? (
            <span className="flex justify-center items-center pb-2 text-red-500">
              {errMsg}
            </span>
          ) : (
            ""
          )}
          <div className="flex justify-between items-center">
            {!confirm ? (
              <button className="p-2 rounded-md text-white bg-green-500 w-full hover:bg-green-600 transition-all ease-in-out duration-500">
                Save
              </button>
            ) : (
              <button
                onClick={handleConfirm}
                className="p-2 rounded-md text-white bg-green-500 w-full hover:bg-green-600 transition-all ease-in-out duration-500"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
        <div className="flex justify-start space-x-6 items-center pt-4">
          <button
            onClick={onClose}
            className="p-2 rounded-md text-white bg-gray-400 hover:bg-gray-500 transition-all ease-in-out duration-500"
          >
            Close
          </button>
          <button
            onClick={logout}
            className="p-2 rounded-md text-white bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

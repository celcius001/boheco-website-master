import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Table from "../components/Table";
import Login from "../components/Login";
import axios from "axios";
// MATERIAL LOADING
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Attendance = () => {
  const [auth, setAuth] = useState(false);
  const [login, isLogin] = useState(false);
  useEffect(() => {
    const res = async () => {
      await axios
        .post("https://attendance-api.celcius001.repl.co/api/auth", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        })
        .then((response) => {
          isLogin(true);
          setAuth(response.data.auth);
        });
    };
    res();
  }, []);
  return (
    <div>
      {auth ? (
        <div>
          <Nav title={"My Daily Time Record"} />
          <Table />
        </div>
      ) : (
        <div>
          {login ? (
            <Login />
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          )}
        </div>
      )}
    </div>
  );
};

export default Attendance;

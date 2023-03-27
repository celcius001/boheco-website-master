import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Table = () => {
  const [username, setUsername] = useState("Your Attendance");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [id, setId] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // LOADING
  const [loading, setLoading] = useState(false);

  // CHECK CONNECTION
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // CHECK EMPTY DATA
  const [empty, setEmpty] = useState(true);

  // SET NAME
  useEffect(() => {
    setUsername(window.localStorage.getItem("fullname"));
    setId(window.localStorage.getItem("empnumber"));
  }, []);

  // AXIOS
  const handleSubmit = (e) => {
    e.preventDefault();
    const json = JSON.stringify({ dateFrom: dateFrom, dateTo: dateTo });
    const data = async () => {
      setCurrentPage(1);
      setEmpty(true);
      setLoading(true);
      const res = await axios
        .post(`https://attendance-api.celcius001.repl.co/api/${id}`, json, {
          headers: { "Content-Type": "application/json" },
        })
        .catch((error) => {
          setErrMsg(error["message"]);
          setErr(true);
          console.log(error["message"]);
        });

      if (res.data.length !== 0) {
        setPosts(res.data);
        setEmpty(false);
        setLoading(false);
      } else {
        setLoading(false);
        setEmpty(true);
      }
    };
    data();
  };

  // PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // GET DATE
  const date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  new Date();

  const df = new Date(y, m, 2).toISOString().split("T")[0];
  const dt = new Date(y, m + 1, 1).toISOString().split("T")[0];

  // SET DATE
  useEffect(() => {
    setDateFrom(df);
    setDateTo(dt);
  }, [df, dt]);

  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-xl mb-2">{username}</h1>
      <form onSubmit={handleSubmit}>
        <div className="md:block flex item-center justify-between">
          <div className="mb-3 w-24">
            <input
              type="date"
              name="from"
              id="from"
              className="md:w-48 md:px-2 md:py-4 w-32 mt-2"
              defaultValue={df}
              onChange={(e) => setDateFrom(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 w-24">
            <input
              type="date"
              name="to"
              id="to"
              className="md:w-48 md:px-2 md:py-4 w-32 mt-2"
              defaultValue={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              required
            />
          </div>
          <button className="mb-2 bg-gray-500 text-white py-2 px-2 rounded-lg hover:bg-gray-600 transition-all ease-in-out duration-500">
            Submit
          </button>
        </div>
      </form>
      <div className="overflow-auto rounded-lg shadow-md">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                DATE
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                SCHED
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                IN
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                OUT
              </th>
            </tr>
          </thead>
          {empty ? (
            <tbody>
              {loading ? (
                <tr>
                  <td>Please Wait.</td>
                </tr>
              ) : (
                <tr>
                  {err ? (
                    <td className="text-red-500">{errMsg}!</td>
                  ) : (
                    <td className="text-red-500">No Data!</td>
                  )}
                </tr>
              )}
            </tbody>
          ) : (
            <tbody>
              {currentPost.map((post) => (
                <tr key={post.Id} className="even:bg-white odd:bg-gray-50">
                  <td className="p-3 text-sm text-gray-700">{post.AttDate}</td>
                  <td className="p-3 text-sm text-gray-700">
                    {post.SchClassID}
                  </td>
                  <td className="p-3 text-sm text-gray-700">{post.SignIn}</td>
                  <td className="p-3 text-sm text-gray-700">{post.SignOut}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {empty ? (
        ""
      ) : (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      )}
    </div>
  );
};

export default Table;

import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 shadow-md pb-2 mt-2">
      {pageNumber.map((number) => (
        <button
          key={number}
          className="w-12 h-12 border-2 border-r-0 border-gray-200 hover:bg-gray-300"
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

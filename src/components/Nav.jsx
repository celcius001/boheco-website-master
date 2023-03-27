import React, { useState } from "react";
import Modal from "./Modal";
import { FaUser } from "react-icons/fa";

const img = ["assets/l.png"];

const Navigation = ({ title }) => {
  const [visible, setVisible] = useState(false);

  const handleClose = () => {
    setVisible(false);
    window.location.reload(true);
  };
  return (
    <div className="shadow-md w-full top-0 left-0 mt-20">
      <div className="flex items-center justify-center bg-primary py-4 md:px-10 px-7">
        <div className="flex-1"></div>
        <img src={img[0]} alt="logo" className="w-8 h-8 md:w-12 md:h-12" />
        <div className="px-4 text-sm sm:text-xl md:text-4xl uppercase font-bold">
          {title}
        </div>
        <div className="flex-1">
          <FaUser
            id="user"
            className="w-8 h-8 ml-auto text-gray-500 hover:text-gray-600 transition-all ease-in-out duration-500 cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>
      <Modal onClose={handleClose} visible={visible} />
    </div>
  );
};

export default Navigation;

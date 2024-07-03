import React from "react";

const img = ["assets/rates/r.jpg"];

const Rates = () => {
  return (
    <section>
      <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase">
        Power Rate Advisory
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[0]}
          alt="rate"
        />
      </div>
    </section>
  );
};

export default Rates;

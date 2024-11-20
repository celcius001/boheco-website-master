import React from "react";

const img = [
  "assets/rates/nov2024/slide1.jpg",
  "assets/rates/nov2024/slide2.jpg",
  "assets/rates/nov2024/slide3.jpg",
  "assets/rates/nov2024/slide4.jpg",
  "assets/rates/nov2024/slide5.jpg",
];

const Rates = () => {
  return (
    <section>
      <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase">
        Power Rate Advisory
      </div>
      <div className="flex gap-4 flex-col items-center justify-center">
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[0]}
          alt="rate"
        />
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[1]}
          alt="rate"
        />
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[2]}
          alt="rate"
        />
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[3]}
          alt="rate"
        />
        <img
          className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
          draggable={false}
          src={img[4]}
          alt="rate"
        />
      </div>
    </section>
  );
};

export default Rates;

import React from "react";

const img = [
  "assets/rates/apr2025/slide1.JPG",
  "assets/rates/apr2025/slide2.JPG",
  "assets/rates/apr2025/slide3.JPG",
  "assets/rates/apr2025/slide4.JPG",
];

const Rates = () => {
  return (
    <section>
      <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase">
        Power Rate Advisory
      </div>
      <div className="flex gap-4 flex-col items-center justify-center">
        {img.map((img, index) => (
          <img
            key={index}
            className="bg-white p-2 rounded-md shadow-lg md:w-3/5"
            draggable={false}
            src={img}
            alt="rate"
          />
        ))}
      </div>
    </section>
  );
};

export default Rates;

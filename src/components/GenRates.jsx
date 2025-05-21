import React from "react";

const img = [
  "assets/rates/gr0.JPG",
  "assets/rates/gr1.JPG",
  "assets/rates/gr2.JPG",
];

const months = ["May", "April", "March"];

const Rates = () => {
  return (
    <section>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of {months[0]} 2025
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[0]} alt="rate" />
      </div>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of {months[1]} 2025
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[1]} alt="rate" />
      </div>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of {months[2]} 2025
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[2]} alt="rate" />
      </div>
    </section>
  );
};

export default Rates;

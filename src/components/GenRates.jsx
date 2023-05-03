import React from "react";

const img = [
  "assets/rates/gr0.png",
  "assets/rates/gr1.png",
  "assets/rates/gr2.png",
];

const Rates = () => {
  return (
    <section>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of April 2023
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[0]} alt="rate" />
      </div>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of March 2023
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[1]} alt="rate" />
      </div>
      <div className="flex items-center justify-center text-xl py-12 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-12 uppercase">
        Breakdown Of Generation Charge For The Month Of February 2023
      </div>
      <div className="flex flex-col items-center justify-center">
        <img draggable={false} src={img[2]} alt="rate" />
      </div>
    </section>
  );
};

export default Rates;

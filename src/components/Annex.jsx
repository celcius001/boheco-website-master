import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import GridComponent from "./GridComponent";
const rph1 = [
  "assets/annex/BOHECO II 2024-2033 DPP_page-0001.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0002.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0003.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0004.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0005.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0006.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0007.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0008.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0009.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0010.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0011.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0012.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0013.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0014.jpg",
  "assets/annex/BOHECO II 2024-2033 DPP_page-0015.jpg",
];

const rph1Array = [
  rph1[0],
  rph1[1],
  rph1[2],
  rph1[3],
  rph1[4],
  rph1[5],
  rph1[6],
  rph1[7],
  rph1[8],
  rph1[9],
  rph1[10],
  rph1[11],
  rph1[12],
  rph1[13],
  rph1[14],
];

let noticeCountOne = 0;

const Annex = () => {
  const [noticeOneIndex, setNoticeOneIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  });

  // * Function called when the button is clicked on next
  const handleNext = (e) => {
    const id = e.currentTarget.id;
    if (id === "notice-one-next") {
      noticeCountOne = (noticeCountOne + 1) % rph1.length;
      setNoticeOneIndex(noticeCountOne);
      slideRef.current.classList.add("fade-anim");
    }
  };

  // * Function called when the button is clicked on previous
  const handlePrev = (e) => {
    const id = e.currentTarget.id;
    if (id === "notice-one-prev") {
      const rateLength = rph1.length;
      noticeCountOne = (noticeOneIndex + rateLength - 1) % rateLength;
      setNoticeOneIndex(noticeCountOne);
      slideRef.current.classList.add("fade-anim");
    }
  };

  return (
    <div>
      <section className="pt-8">
        <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
          Distribution Development Plan 2024
        </div>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[960px] h-[720]"
              draggable={false}
              src={rph1Array[noticeOneIndex]}
              alt="annex"
            />
          </div>
          <div className="absolute w-full top-1/2 trasform translate-y-1/2 py-2 flex justify-between items-center">
            <button
              id="notice-one-prev"
              className="bg-black text-white p-1 px-4 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={handlePrev}
            >
              <AiOutlineVerticalRight size={30} />
            </button>
            <button
              id="notice-one-next"
              className="bg-black text-white p-1 px-4 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={handleNext}
            >
              <AiOutlineVerticalLeft size={30} />
            </button>
          </div>
        </div>
      </section>
      <h1 className="pt-8">Attached:</h1>
      <section className="flex flex-wrap justify-center items-center pt-8">
        <GridComponent
          title="Annex A"
          url="https://drive.google.com/file/d/1t2logBpOet517D5KnTCL6OGl4larqq9r/view?usp=sharing"
        />
        <GridComponent
          title="Annex B"
          url="https://drive.google.com/file/d/1atMfL5vHu3GPAZHw8mSKW04qCrX759pg/view?usp=sharing"
        />
        <GridComponent
          title="Annex C"
          url="https://drive.google.com/file/d/1tNFik1RAgZKO7ZPuwiOVw6XjL1bkwcwv/view?usp=sharing"
        />
        <GridComponent
          title="Annex D"
          url="https://drive.google.com/file/d/1Jf4HJ4DyLMfz_lfdscwL7UAUdTJKf4nY/view?usp=sharing"
        />
        <GridComponent
          title="Annex E"
          url="https://drive.google.com/file/d/11-_5RHl4ELo5ffOMUVr_Xwd5P0u7wUEZ/view?usp=sharing"
        />
        <GridComponent
          title="Annex F"
          url="https://drive.google.com/file/d/1TkgMTBqvBKlDKLldNacAqIH1FCaa4zYp/view?usp=sharing"
        />
        <GridComponent
          title="Annex G"
          url="https://drive.google.com/file/d/1kwG-_YHp4HWI3OqYd0kV2blphyIHrirJ/view?usp=sharing"
        />
        <GridComponent
          title="Annex H"
          url="https://drive.google.com/file/d/1jjrhQC-7G0VNVyAySJWgws_YPot8Elcc/view?usp=sharing"
        />
        <GridComponent
          title="Annex I"
          url="https://drive.google.com/file/d/1_LBdI-NE-SilfvFqQHA4Le9i3GjYzA_O/view?usp=sharing"
        />
      </section>
    </div>
  );
};

export default Annex;

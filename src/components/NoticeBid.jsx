import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const rph1 = [
  "assets/rph/PB-ITB-R7-1-2024_page-0001.jpg",
  "assets/rph/PB-ITB-R7-1-2024_page-0002.jpg",
  "assets/rph/PB-ITB-R7-1-2024_page-0003.jpg",
  "assets/rph/PB-ITB-R7-1-2024_page-0004.jpg",
  "assets/rph/PB-ITB-R7-1-2024_page-0005.jpg",
];

const rph2 = [
  "assets/rph/PB-ITB-R7-2-2024_page-0001.jpg",
  "assets/rph/PB-ITB-R7-2-2024_page-0002.jpg",
  "assets/rph/PB-ITB-R7-2-2024_page-0003.jpg",
  "assets/rph/PB-ITB-R7-2-2024_page-0004.jpg",
  "assets/rph/PB-ITB-R7-2-2024_page-0005.jpg",
];

const rph1Array = [rph1[0], rph1[1], rph1[2], rph1[3], rph1[4]];

const rph2Array = [rph2[0], rph2[1], rph2[2], rph2[3], rph2[4]];

let noticeCountOne = 0;
let noticeCountTwo = 0;

const NoticeBid = () => {
  const [noticeOneIndex, setNoticeOneIndex] = useState(0);
  const [noticeTwoIndex, setNoticeTwoIndex] = useState(0);

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
    if (id === "notice-two-next") {
      noticeCountTwo = (noticeCountTwo + 1) % rph2.length;
      setNoticeTwoIndex(noticeCountTwo);
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
    if (id === "notice-two-prev") {
      const rateLength = rph2.length;
      noticeCountTwo = (noticeTwoIndex + rateLength - 1) % rateLength;
      setNoticeTwoIndex(noticeCountTwo);
      slideRef.current.classList.add("fade-anim");
    }
  };

  return (
    <div>
      <section className="pt-8">
        <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
          INVITATION TO BID
        </div>
        <span className="font-[Gloock] text-2xl tracking-widest">
          Region 7 RPH Public Bidding No. 1 Series of 2024
        </span>
        <div className="font-[Gloock] text-xl tracking-widest">
          PB-ITB-R7-1-2024
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
              alt="rph"
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
      <section className="pt-8">
        <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
          INVITATION TO BID
        </div>
        <span className="font-[Gloock] text-2xl tracking-widest">
          Region 7 RPH Public Bidding No. 2 Series of 2024
        </span>
        <div className="font-[Gloock] text-xl tracking-widest">
          PB-ITB-R7-2-2024
        </div>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[960px] h-[720]"
              draggable={false}
              src={rph2Array[noticeTwoIndex]}
              alt="rph"
            />
          </div>
          <div className="absolute w-full top-1/2 trasform translate-y-1/2 py-2 flex justify-between items-center">
            <button
              id="notice-two-prev"
              className="bg-black text-white p-1 px-4 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={handlePrev}
            >
              <AiOutlineVerticalRight size={30} />
            </button>
            <button
              id="notice-two-next"
              className="bg-black text-white p-1 px-4 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={handleNext}
            >
              <AiOutlineVerticalLeft size={30} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticeBid;

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const noticeOne = [
  "assets/noticeone/01.jpg",
  "assets/noticeone/02.jpg",
  "assets/noticeone/03.jpg",
  "assets/noticeone/04.jpg",
  "assets/noticeone/05.jpg",
  "assets/noticeone/06.jpg",
  "assets/noticeone/07.jpg",
  "assets/noticeone/08.jpg",
  "assets/noticeone/09.jpg",
  "assets/noticeone/10.jpg",
  "assets/noticeone/11.jpg",
  "assets/noticeone/12.jpg",
  "assets/noticeone/13.jpg",
  "assets/noticeone/14.jpg",
  "assets/noticeone/15.jpg",
  "assets/noticeone/16.jpg",
  "assets/noticeone/17.jpg",
  "assets/noticeone/18.jpg",
  "assets/noticeone/19.jpg",
  "assets/noticeone/20.jpg",
  "assets/noticeone/21.jpg",
  "assets/noticeone/22.jpg",
];

const noticeTwo = [
  "assets/noticetwo/01.jpg",
  "assets/noticetwo/02.jpg",
  "assets/noticetwo/03.jpg",
  "assets/noticetwo/04.jpg",
  "assets/noticetwo/05.jpg",
  "assets/noticetwo/06.jpg",
  "assets/noticetwo/07.jpg",
  "assets/noticetwo/08.jpg",
  "assets/noticetwo/09.jpg",
  "assets/noticetwo/10.jpg",
  "assets/noticetwo/11.jpg",
  "assets/noticetwo/12.jpg",
  "assets/noticetwo/13.jpg",
  "assets/noticetwo/14.jpg",
  "assets/noticetwo/15.jpg",
  "assets/noticetwo/16.jpg",
  "assets/noticetwo/17.jpg",
];

const noticeThree = "assets/noticethree/01.jpg";

const agmm = ["assets/agmm/01.jpg", "assets/agmm/02.jpg"];

const noticeOneArray = [
  noticeOne[0],
  noticeOne[1],
  noticeOne[2],
  noticeOne[3],
  noticeOne[4],
  noticeOne[5],
  noticeOne[6],
  noticeOne[7],
  noticeOne[8],
  noticeOne[9],
  noticeOne[10],
  noticeOne[11],
  noticeOne[12],
  noticeOne[13],
  noticeOne[14],
  noticeOne[15],
  noticeOne[16],
  noticeOne[17],
  noticeOne[18],
  noticeOne[19],
  noticeOne[20],
  noticeOne[21],
];

const noticeTwoArray = [
  noticeTwo[0],
  noticeTwo[1],
  noticeTwo[2],
  noticeTwo[3],
  noticeTwo[4],
  noticeTwo[5],
  noticeTwo[6],
  noticeTwo[7],
  noticeTwo[8],
  noticeTwo[9],
  noticeTwo[10],
  noticeTwo[11],
  noticeTwo[12],
  noticeTwo[13],
  noticeTwo[14],
  noticeTwo[15],
  noticeTwo[16],
];

const agmmArray = [agmm[0], agmm[1]];

let noticeCountOne = 0;
let noticeCountTwo = 0;
let agmmCount = 0;

const Notice = () => {
  const [noticeOneIndex, setNoticeOneIndex] = useState(0);
  const [noticeTwoIndex, setNoticeTwoIndex] = useState(0);
  const [agmmIndex, setAgmmIndex] = useState(0);

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
    if (id === "agmm-next") {
      agmmCount = (agmmCount + 1) % agmm.length;
      setAgmmIndex(agmmCount);
      slideRef.current.classList.add("fade-anim");
    }
    if (id === "notice-one-next") {
      noticeCountOne = (noticeCountOne + 1) % noticeOne.length;
      setNoticeOneIndex(noticeCountOne);
      slideRef.current.classList.add("fade-anim");
    }
    if (id === "notice-two-next") {
      noticeCountTwo = (noticeCountTwo + 1) % noticeTwo.length;
      setNoticeTwoIndex(noticeCountTwo);
      slideRef.current.classList.add("fade-anim");
    }
  };

  // * Function called when the button is clicked on previous
  const handlePrev = (e) => {
    const id = e.currentTarget.id;
    if (id === "agmm-prev") {
      const rateLength = agmm.length;
      agmmCount = (agmmIndex + rateLength - 1) % rateLength;
      setAgmmIndex(agmmCount);
      slideRef.current.classList.add("fade-anim");
    }
    if (id === "notice-one-prev") {
      const rateLength = noticeOne.length;
      noticeCountOne = (noticeOneIndex + rateLength - 1) % rateLength;
      setNoticeOneIndex(noticeCountOne);
      slideRef.current.classList.add("fade-anim");
    }
    if (id === "notice-two-prev") {
      const rateLength = noticeTwo.length;
      noticeCountTwo = (noticeTwoIndex + rateLength - 1) % rateLength;
      setNoticeTwoIndex(noticeCountTwo);
      slideRef.current.classList.add("fade-anim");
    }
  };

  return (
    <div>
      <section className="pt-8">
        <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
          Fueling Hope Lighting The Way
        </div>
        <span className="font-[Gloock] text-2xl tracking-widest">
          December 2023
        </span>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[900px] h-[720]"
              draggable={false}
              src={noticeThree}
              alt="notice"
            />
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="flex items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
          41<sup className="font-light">st</sup> Annual General Membership
          Metting (AGMM)
        </div>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[900px] h-[720]"
              draggable={false}
              src={agmmArray[agmmIndex]}
              alt="notice"
            />
          </div>
          <div className="absolute w-full top-1/2 trasform translate-y-1/2 py-2 flex justify-between items-center">
            <button
              id="agmm-prev"
              className="bg-black text-white p-1 px-4 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition-all duration-300"
              onClick={handlePrev}
            >
              <AiOutlineVerticalRight size={30} />
            </button>
            <button
              id="agmm-next"
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
          ERC CASE NO. 2023-113 RC ORDER/ 10 OCTOBER 2023
        </div>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[960px] h-[720]"
              draggable={false}
              src={noticeOneArray[noticeOneIndex]}
              alt="notice"
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
          ERC CASE NO. 2023-113 RC NOTICE OF VIRTUAL HEARING/ 10 OCTOBER 2023
        </div>
        <div
          ref={slideRef}
          className="w-full select-one py-2 flex justify-center items-center relative"
        >
          <div>
            <img
              className="md:h-[960px] h-[720]"
              draggable={false}
              src={noticeTwoArray[noticeTwoIndex]}
              alt="notice"
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

export default Notice;

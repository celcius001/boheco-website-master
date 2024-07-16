import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";

const rph1 = [
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0001.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0002.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0003.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0004.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0005.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0006.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0007.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0008.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0009.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0010.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0011.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0012.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0013.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0014.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0015.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0016.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0017.jpg",
  "assets/rph3/RPH SBB NO. 24-03 SUPPLY AND DELIVERY OF REGION 7 2025 STEEL POLES (PB-ITB-R7-3-2024)_page-0018.jpg",
];

const rph2 = [
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0001.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0002.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0003.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0004.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0005.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0006.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0007.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0008.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0009.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0010.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0011.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0012.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0013.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0014.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0015.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0016.jpg",
  "assets/rph4/RPH SBB NO. 24-04 SUPPLY AND DELIVERY OF REGION 7 2025 CONDUCTORS (PB-ITB-R7-4-2024)_page-0017.jpg",
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
  rph1[15],
  rph1[16],
  rph1[17],
];

const rph2Array = [
  rph2[0],
  rph2[1],
  rph2[2],
  rph2[3],
  rph2[4],
  rph2[5],
  rph2[6],
  rph2[7],
  rph2[8],
  rph2[9],
  rph2[10],
  rph2[11],
  rph2[12],
  rph2[13],
  rph2[14],
  rph2[15],
  rph2[16],
];

let noticeCountOne = 0;
let noticeCountTwo = 0;

const NoticeBid4 = () => {
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
          Regional Procurement Hub Program - Region 7 Supplemental Bid Bulletin
          No. 24-03
        </div>
        <span className="font-[Gloock] text-2xl tracking-widest">
          For The Procurement of Supply and Delivery of Steel Poles
        </span>
        <div className="font-[Gloock] text-xl tracking-widest">
          PB-ITB-R7-3-2024
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
          Regional Procurement Hub Program - Region 7 Supplemental Bid Bulletin
          No. 24-04
        </div>
        <span className="font-[Gloock] text-2xl tracking-widest">
          For The Procurement of Consignment, Supply and Delivery of Conductors
        </span>
        <div className="font-[Gloock] text-xl tracking-widest">
          PB-ITB-R7-4-2024
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

export default NoticeBid4;

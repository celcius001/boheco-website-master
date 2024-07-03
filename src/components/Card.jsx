import React from "react";

const img = [
  "assets/management/GM-d.jpg",
  "assets/management/TSD-d.jpg",
  "assets/management/ELLEN-d.jpg",
  "assets/management/UBAY-d.jpg",
  "assets/management/TALIBON-d.jpg",
  "assets/management/CORPLAN-d.jpg",
  "assets/management/ISD-d.jpg",
  "assets/bod/BOD1-d.jpg",
  "assets/bod/BOD2-d.jpg",
  "assets/bod/BOD3-d.jpg",
  "assets/bod/BOD4-d.jpg",
  "assets/bod/BOD5-d.jpg",
  "assets/bod/BOD6-d.jpg",
  "assets/bod/BOD7-d.jpg",
  "assets/bod/BOD8-d.jpg",
  "assets/bod/BOD9-d.jpg",
];

const Card = ({
  district_1,
  district_2,
  district_3,
  district_4,
  district_5,
  district_6,
  district_7,
  district_8,
  district_9,
}) => {
  return (
    <>
      <section>
        {/* BODS */}
        <div className="text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase text-center">
          Board of Directors
        </div>
        <section className="container py-6 md:pl-24 mx-auto flex flex-wrap md:justify-beteew justify-center">
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[15]}
                  alt="president"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_9[0]}</h2>
                <h1 className="text-sm uppercase">{district_9[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_9[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">President</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[11]}
                  alt="vicepresident"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_5[0]}</h2>
                <h1 className="text-sm uppercase">{district_5[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_5[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  1st Vice-President
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[14]}
                  alt="chiefpro"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_8[0]}</h2>
                <h1 className="text-sm uppercase">{district_8[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_8[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  2nd Vice-President
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[12]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_6[0]}</h2>
                <h1 className="text-sm uppercase">{district_6[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_6[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">Secretary</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[10]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_4[0]}</h2>
                <h1 className="text-sm uppercase">{district_4[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_4[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">Treasurer</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[9]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_3[0]}</h2>
                <h1 className="text-sm uppercase">{district_3[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-xl uppercase">{district_3[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">Auditor</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[13]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_7[0]}</h2>
                <h1 className="text-sm uppercase">{district_7[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_7[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">Chief PRO</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[8]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_2[0]}</h2>
                <h1 className="text-sm uppercase">{district_2[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_2[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">PRO I</h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[7]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">{district_1[0]}</h2>
                <h1 className="text-sm uppercase">{district_1[1]}</h1>
              </div>
              <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
                <h2 className="text-sm uppercase">{district_1[2]}</h2>
                <h1 className="text-sm uppercase text-slate-700">PRO II</h1>
              </div>
            </div>
          </div>
        </section>
        {/* END OF BODS */}
      </section>
      <section>
        {/* MANAGEMENT */}
        <div className="text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase text-center">
          MANAGEMENT
        </div>
        <section className="container py-6 md:pl-24 mx-auto flex flex-wrap md:justify-beteew justify-center">
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                {/* specific size from picture */}
                <img
                  draggable={false}
                  src={img[0]}
                  alt="gm"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">Engr. Eugenio R. Tan</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  General Manager
                </h1>
              </div>
            </div>
          </div>
          {/* <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[4]}
                  alt="empty"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center pt-28">
                <h2 className="text-lg uppercase">-</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  FSD Manager
                </h1>
              </div>
            </div>
          </div> */}
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[1]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">Noel M. Aleman, REE, MPA</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  TSD Manager
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[6]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">Tito O. Andamon</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  ISD Manager
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[2]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">Ellen O. Bayhon, CPA, MPA</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  Internal Auditor
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[3]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">
                  Vicente P. Melencion, Jr., REE
                </h2>
                <h1 className="text-sm uppercase text-slate-700">
                  Ubay Area Manager
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[4]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">Raywin Q. Flor, REE, MPA</h2>
                <h1 className="text-sm uppercase text-slate-700">
                  Talibon Area Manager
                </h1>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/4 py-10">
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-auto">
              <div className="flex items-center justify-center">
                <img
                  draggable={false}
                  src={img[5]}
                  alt="empty"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-lg uppercase">
                  Ariel G. Torrejos, REE, RME, MPA
                </h2>
                <h1 className="text-sm uppercase text-slate-700">
                  Corporate Planning Manager
                </h1>
              </div>
            </div>
          </div>
        </section>
        {/* END OF MANAGEMENT */}
      </section>
    </>
  );
};

export default Card;

import React from "react";

const img = [
  "assets/g.png",
  "assets/p.png",
  "assets/v.png",
  "assets/c.png",
  "assets/pe.png",
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
    <section>
      {/* BODS */}
      <div className="text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase text-center">
        Board of Directors
      </div>
      <section className="container py-24 md:pl-24 mx-auto flex flex-wrap md:justify-beteew justify-center">
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[1]}
                alt="president"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">
                District III Representative:
              </h2>
              <h1 className="text-sm uppercase">Guindulma & Anda</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_3}</h2>
              <h1 className="text-sm uppercase text-slate-700">President</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[2]}
                alt="vicepresident"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District VI Representative:</h2>
              <h1 className="text-sm uppercase">Pilar & Sierra-Bullones</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_6}</h2>
              <h1 className="text-sm uppercase text-slate-700">
                1st Vice-President
              </h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[3]}
                alt="chiefpro"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District II Representative:</h2>
              <h1 className="text-sm uppercase">Jagna & Duero</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_2}</h2>
              <h1 className="text-sm uppercase text-slate-700">Chief PRO</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[4]}
                alt="empty"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District I Representative:</h2>
              <h1 className="text-sm uppercase">G-Hernardez, Valencia</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_1}</h2>
              <h1 className="text-sm uppercase text-slate-700">Tresurer</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[4]}
                alt="empty"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District IV Representative:</h2>
              <h1 className="text-sm uppercase">Candijay, Mabini & Alicia</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_4}</h2>
              <h1 className="text-sm uppercase text-slate-700">-</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[4]}
                alt="empty"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District V Representative:</h2>
              <h1 className="text-sm uppercase">Ubay & CPG Island</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_5}</h2>
              <h1>-</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[4]}
                alt="empty"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">District IX Representative:</h2>
              <h1 className="text-sm uppercase">Getafe & Buenavista</h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_9}</h2>
              <h1>-</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              <img
                draggable={false}
                src={img[4]}
                alt="empty"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">
                District VIII Representative:
              </h2>
              <h1 className="text-sm uppercase">
                Trinidad, Bien-Unido & Talibon
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">{district_8}</h2>
              <h1>-</h1>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 lg:w-1/4 py-10">
          <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm w-72 h-96">
            <div className="flex items-center justify-center">
              {/* specific size from picture */}
              <img
                draggable={false}
                src={img[0]}
                alt="gm"
                className="h-36 w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center pt-28">
              <h2 className="text-lg uppercase">Ex-Officio Member</h2>
            </div>
            <div className="flex flex-col items-center justify-center bg-orange-400 p-2">
              <h2 className="text-xl uppercase">Engr. Eugenio R. Tan</h2>
              <h1 className="text-sm uppercase text-slate-700">
                General Manager
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* END OF BODS */}
    </section>
  );
};

export default Card;

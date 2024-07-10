import React from "react";
import BCards from "./BCards";

const img = [
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

const CardBoard = () => {
  return (
    <section>
      {/* MANAGEMENT */}
      <div className="text-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-5 uppercase">
        Board Of Directors
      </div>
      <section className="flex justify-center items-center">
        <BCards
          img={img[8]}
          title={"DISTRICT IX REPRESENTATIVE"}
          name={"ARNULDO S. LUGOD"}
          address={"GETAFE & BUENAVISTA"}
          position={"PRESIDENT"}
        />
      </section>
      <section className="container py-6 md:pl-24 mx-auto flex lg:flex-row flex-col flex-wrap md:justify-beteew justify-center">
        <BCards
          img={img[0]}
          title={"DISTRICT I REPRESENTATIVE"}
          name={"RAUL N. PAGARAN"}
          address={"G-HERNARDEZ, VALENCIA"}
          position={"PRO II"}
        />
        <BCards
          img={img[1]}
          title={"DISTRICT II REPRESENTATIVE"}
          name={"GENARO D. MENDE"}
          address={"JAGNA & DUERO"}
          position={"PRO I"}
        />
        <BCards
          img={img[2]}
          title={"DISTRICT III REPRESENTATIVE"}
          name={"CHRISTINE G. LAGURA"}
          address={"GUINDULMA & ANDA"}
          position={"AUDITOR"}
        />
        <BCards
          img={img[3]}
          title={"DISTRICT IV REPRESENTATIVE"}
          name={"SIXTO B. BUDIONGAN JR"}
          address={"CANDIJAY, MABINI & ALICIA"}
          position={"TREASURER"}
        />
        <BCards
          img={img[4]}
          title={"DISTRICT V REPRESENTATIVE"}
          name={"NOEL D. VILLANUEVA"}
          address={"UBAY & CPG ISLAND"}
          position={"1ST VICE-PRESIDENT"}
        />
        <BCards
          img={img[5]}
          title={"DISTRICT VI REPRESENTATIVE"}
          name={"RUEL E. MABAQUIAO"}
          address={"PILAR & SIERRA-BULLONES"}
          position={"SECRETARY"}
        />
        <BCards
          img={img[6]}
          title={"DISTRICT VII REPRESENTATIVE"}
          name={"CRISTITA A. CERICOS"}
          address={"SAN MIGUEL, DAGOHOY & DANAO"}
          position={"CHIEF PRO"}
        />
        <BCards
          img={img[7]}
          title={"DISTRICT VIII REPRESENTATIVE"}
          name={"ROBERTO O. LANGAMEN"}
          address={"TRINIDAD, BIEN-UNIDO & TALIBON"}
          position={"CHIEF PRO"}
        />
      </section>
    </section>
  );
};

export default CardBoard;

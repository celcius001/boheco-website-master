import React from "react";
import Annex from "../components/Annex";
import GridComponent from "../components/GridComponent";

function DdpPspp() {
  return (
    <>
      <div className="bg-image2 flex flex-col items-center justify-center">
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <Annex />

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
          </div>
        </section>
      </div>
    </>
  );
}

export default DdpPspp;

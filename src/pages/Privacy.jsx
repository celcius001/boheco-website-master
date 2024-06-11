import React from "react";

const privacyNotice = "assets/privacy/01.png";

const Privacy = () => {
  return (
    <>
      <div className="bg-image2 flex flex-col items-center justify-center">
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <div className="flex flex-col items-center justify-center text-xl py-2 md:text-2xl lg:text-4xl font-[Gloock] font-extrabold lg:py-2 uppercase">
                Privacy Notice
                <div className="m-12">
                  <img
                    draggable={false}
                    src={privacyNotice}
                    alt="privacyNotice"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;

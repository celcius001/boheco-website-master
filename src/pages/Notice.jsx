import React from "react";
import NoticeComponent from "../components/NoticeComponent";

function Notice() {
  return (
    <>
      <div className="bg-image2 flex flex-col items-center justify-center">
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeComponent
                title={"Notice To Proceed"}
                path={
                  "assets/notice/NOTICE TO PROCEED_PB-ITB-R7-4-2024_page-0001.jpg"
                }
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Notice;

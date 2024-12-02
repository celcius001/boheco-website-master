import React from "react";
import NoticeComponent from "../components/NoticeComponent";
import ListComponent from "../components/ListComponent";

function Notice() {
  return (
    <>
      <div className="bg-image2 flex flex-col items-center justify-center">
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2">
              <div className="flex flex-col justify-center items-center">
                <ul className="space-y-4">
                  <NoticeComponent
                    title={"Notice Of Award"}
                    path={
                      "assets/notice/Signed NOA - PB-ITB-R7-2-2024 (Rebidding)_page-0001.jpg"
                    }
                  />
                  <ListComponent
                    title={"Signed NOA - PB-ITB-R7-2-2024 (Rebidding)"}
                    url={
                      "https://drive.google.com/file/d/1CCtSZz9IbbQ6KF4yJ2dTX0MBaHz0Y_cE/view?usp=drive_link"
                    }
                  />
                </ul>
              </div>
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

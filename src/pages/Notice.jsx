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
                  <li>
                    <NoticeComponent
                      title={"2024-029 CF BOHECO II OU Application"}
                      path={
                        "assets/notice/129. 2024-029 CF BOHECO II OU Application_page-0001.jpg"
                      }
                    />
                    <ListComponent
                      title={"2024-029 CF BOHECO II OU Application"}
                      url={
                        "https://drive.google.com/file/d/1JtP53fUH6bWGZ1OrKFavQ_Qwy9e_3l7D/view?usp=drive_link"
                      }
                    />
                  </li>
                  <li>
                    <NoticeComponent
                      title={"NOTICE OF VIRTUAL HEARING"}
                      path={
                        "assets/notice/Promulgated 0125-2024. NVH 2024-029 CF 26Dec2024_page-0001.jpg"
                      }
                    />
                    <ListComponent
                      title={"Notice Of Virtual Hearing"}
                      url={
                        "https://drive.google.com/file/d/1xU4C-LvoVZEIUzrsYYxbnsYb1fBfXU42/view?usp=drive_link"
                      }
                    />
                  </li>
                  <li>
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
                  </li>
                  <li>
                    <NoticeComponent
                      title={"Notice To Proceed"}
                      path={
                        "assets/notice/NOTICE TO PROCEED_PB-ITB-R7-4-2024_page-0001.jpg"
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Notice;

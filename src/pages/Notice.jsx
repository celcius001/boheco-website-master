import React from "react";
import Notice from "../components/Notice";
import NoticeBid from "../components/NoticeBid";
import NoticeBid2 from "../components/NoticeBid2";
import NoticeBid3 from "../components/NoticeBid3";
import NoticeBid4 from "../components/NoticeBid4";
import NoticeBid5 from "../components/NoticeBid5";

function Advisory() {
  return (
    <>
      <div className="bg-image2 flex flex-col items-center justify-center">
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeBid5 />
            </div>
          </div>
        </section>
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeBid4 />
            </div>
          </div>
        </section>
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeBid3 />
            </div>
          </div>
        </section>
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeBid />
            </div>
          </div>
        </section>
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <NoticeBid2 />
            </div>
          </div>
        </section>
        <section className="container px-5 py-24 mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl font-extrabold py-2 uppercase">
              <Notice />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Advisory;

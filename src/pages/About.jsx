import React from "react";

import Section from "../components/Section";
import Glance from "../components/Glance";
import Profile from "../components/Profile";
import Card from "../components/Card";

const About = () => {
  /* PROFILE */
  const members = "134,957";
  const household = "143,654";
  const consumers = "143,500";
  const employees = "232";

  /* CARD */
  const district_1 = "RAUL PAGARAN";
  const district_2 = "CANDELARIO BAGO";
  const district_3 = "CHRISTINE G. LAGURA";
  const district_4 = "SIXTO BUDIONGAN JR";
  const district_5 = "NOEL D. VILLANUEVA";
  const district_6 = "RUEL E. MABAQUIAO";
  const district_7 = "";
  const district_8 = "ROBERTO O. LANGAMEN";
  const district_9 = "ARNULDO S. LUGOD";
  return (
    <div className="bg-image2 flex flex-col items-center justify-center">
      <Section />
      <Glance employees={employees} />
      <Profile
        members={members}
        household={household}
        consumers={consumers}
        employees={employees}
      />
      <Card
        district_1={district_1}
        district_2={district_2}
        district_3={district_3}
        district_4={district_4}
        district_5={district_5}
        district_6={district_6}
        district_7={district_7}
        district_8={district_8}
        district_9={district_9}
      />
    </div>
  );
};

export default About;

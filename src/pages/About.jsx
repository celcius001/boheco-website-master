import React from "react";

import Section from "../components/Section";
import Glance from "../components/Glance";
import Profile from "../components/Profile";
import CardManagement from "../components/CardManagement";
import CardBoard from "../components/CardBoard";

const About = () => {
  /* PROFILE */
  const members = "154,779";
  const household = "172,102";
  const consumers = "161,031";
  const employees = "268";

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
      <CardBoard />
      <CardManagement />
    </div>
  );
};

export default About;

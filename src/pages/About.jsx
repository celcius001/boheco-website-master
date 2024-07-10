import React from "react";

import Section from "../components/Section";
import Glance from "../components/Glance";
import Profile from "../components/Profile";
import CardManagement from "../components/CardManagement";
import CardBoard from "../components/CardBoard";

const About = () => {
  /* PROFILE */
  const members = "134,957";
  const household = "143,654";
  const consumers = "143,500";
  const employees = "232";

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

import React from "react";

import Section from "../components/Section";
import Glance from "../components/Glance";
import Profile from "../components/Profile";
import Card from "../components/Card";
import CardManagement from "../components/CardManagement";
import CardBoard from "../components/CardBoard";

const About = () => {
  /* PROFILE */
  const members = "134,957";
  const household = "143,654";
  const consumers = "143,500";
  const employees = "232";

  /* CARD */
  const district_1 = [
    "DISTRICT I REPRESENTATIVE",
    "RAUL N. PAGARAN",
    "G-HERNARDEZ, VALENCIA",
  ];
  const district_2 = [
    "DISTRICT II REPRESENTATIVE",
    "GENARO D. MENDE",
    "JAGNA & DUERO",
  ];
  const district_3 = [
    "DISTRICT III REPRESENTATIVE",
    "CHRISTINE G. LAGURA",
    "GUINDULMA & ANDA",
  ];
  const district_4 = [
    "DISTRICT IV REPRESENTATIVE",
    "SIXTO B. BUDIONGAN JR",
    "CANDIJAY, MABINI & ALICIA",
  ];
  const district_5 = [
    "DISTRICT V REPRESENTATIVE",
    "NOEL D. VILLANUEVA",
    "UBAY & CPG ISLAND",
  ];
  const district_6 = [
    "DISTRICT VI REPRESENTATIVE",
    "RUEL E. MABAQUIAO",
    "PILAR & SIERRA-BULLONES",
  ];
  const district_7 = [
    "DISTRICT VII REPRESENTATIVE",
    "CRISTITA A. CERICOS",
    "SAN MIGUEL, DAGOHOY & DANAO",
  ];
  const district_8 = [
    "DISTRICT VIII REPRESENTATIVE",
    "ROBERTO O. LANGAMEN",
    "TRINIDAD, BIEN-UNIDO & TALIBON",
  ];
  const district_9 = [
    "DISTRICT IX REPRESENTATIVE",
    "ARNULDO S. LUGOD",
    "GETAFE & BUENAVISTA",
  ];
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
      <CardManagement />
      <CardBoard />
    </div>
  );
};

export default About;

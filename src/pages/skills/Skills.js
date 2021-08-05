import React from "react";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";

function Skills() {
  const RenderSkills = () => {
    return <React.Fragment>Skills</React.Fragment>;
  };
  return (
    <>
      <Seo title={"Knowledge & Skills | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderSkills />
      <Footer />
    </>
  );
}

export default Skills;

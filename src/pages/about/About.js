import React from "react";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";

function About() {
  const RenderAbout = () => {
    return <React.Fragment>aboutme</React.Fragment>;
  };
  return (
    <>
      <Seo title={"About Me | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderAbout />
      <Footer />
    </>
  );
}

export default About;

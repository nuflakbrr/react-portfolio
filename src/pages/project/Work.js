import React from "react";
import Seo from "../../components/Seo";
import Footer from "../../components/Footer";
import Navbars from "../../components/Navbars";

function Work() {
  const RenderWork = () => {
    return <React.Fragment>Work</React.Fragment>;
  };
  return (
    <>
      <Seo title={"Recently Project | Naufal Akbar Nugroho"} />
      <Navbars />
      <RenderWork />
      <Footer />
    </>
  );
}

export default Work;

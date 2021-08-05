import React from "react";
import { Helmet } from "react-helmet";

function Seo({ title }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? title : "My Portfolio Website | Naufal Akbar Nugroho"}</title>
    </Helmet>
  );
}

export default Seo;

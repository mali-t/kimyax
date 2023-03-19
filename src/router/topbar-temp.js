import React from "react";
import Footbar from "../components/tfootbar/footbar";
import Topbar from "../components/topbar/topbar";

const Toplu = ({ children }, fixus) => {
  return (
    <>
      <Topbar fix={fixus} />
      {children}
      <Footbar />
    </>
  );
};

export default Toplu;

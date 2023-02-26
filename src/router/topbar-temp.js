import React from "react";
import Topbar from "../components/topbar/topbar";

const Toplu = ({ children }, fixus) => {
  return (
    <>
      <Topbar fix={fixus} />
      {children}
    </>
  );
};

export default Toplu;

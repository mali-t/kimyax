import React from "react";
import { Container } from "react-bootstrap";
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

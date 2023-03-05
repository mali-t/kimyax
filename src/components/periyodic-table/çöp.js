import React from "react";
import getElementConfiguration from "./periodic-table";

function Tok() {
  const elementNumber = "20"; // örneğin 20 numaralı elementin elektron dizilimini almak istiyorum
  console.log(getElementConfiguration(elementNumber));

  return <div>Elektron dizilimi: {getElementConfiguration(elementNumber)}</div>;
}

export default Tok;

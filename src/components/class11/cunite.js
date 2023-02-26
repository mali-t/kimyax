import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Ccunite = () => {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          <img src="../../assets/img/araba1.jpg" alt="" />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>jjj</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Ccunite;

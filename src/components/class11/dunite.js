import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Ddunite = () => {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="04">
        <Accordion.Header>Tepkime Entalpisi</Accordion.Header>
        <Accordion.Body>
          <img src={require("../../assets/img/enta.PNG")} alt="" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="05">
        <Accordion.Header>Endotermik Tepkime</Accordion.Header>
        <Accordion.Body>
          <img src={require("../../assets/img/endo.PNG")} alt="" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="07">
        <Accordion.Header>Ekzotermik Tepkime</Accordion.Header>
        <Accordion.Body>
          <img src={require("../../assets/img/ekzo2.PNG")} alt="" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="008">
        <Accordion.Header>Hess Yasası</Accordion.Header>
        <Accordion.Body>
          <img src={require("../../assets/img/hess.PNG")} alt="" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Ddunite;

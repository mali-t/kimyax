import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Aunite = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pil Potansiyeli</Accordion.Header>
          <Accordion.Body>
            <img src={require("../../assets/img/pot.PNG")} alt="" />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0jkhgcfdxs">
          <Accordion.Header>Faraday Kanunu</Accordion.Header>
          <Accordion.Body>
            <img src="https://kimyaogren.com/uploads/2021/11/99.jpg" alt="" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Aunite;

import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Cunite = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0trhgfb">
          <Accordion.Header>Alkanlar</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> H</span>
              <span>2n+2</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="0trgfbv">
          <Accordion.Header>Alkenler</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> H</span>
              <span>2n</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="03rf">
          <Accordion.Header>Alkinler</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> H</span>
              <span>2n-2</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="077">
          <Accordion.Header>Sikloalkanlar</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              {" "}
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> H</span>
              <span>2n</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="660">
          <Accordion.Header>Aromatikler</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> H</span>
              <span>2n</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="550">
          <Accordion.Header>Karbonhidratlar</Accordion.Header>
          <Accordion.Body>
            <span className="ac">
              <span className="el">C</span>
              <span>n </span>
              <span className="el"> (H</span>
              <span>2</span>
              <span className="el">O)</span>
              <span>m</span>
            </span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Cunite;

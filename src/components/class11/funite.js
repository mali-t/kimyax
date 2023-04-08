import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Funite = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Denge Tepkimeleri </Accordion.Header>
          <Accordion.Body>
            <img
              src="   https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_1-71.jpg      "
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="076">
          <Accordion.Header>Denge Bağıntıları </Accordion.Header>
          <Accordion.Body>
            <img
              src="    https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_4-67.jpg     "
              alt=""
            />
            <br />
            <img
              src="     https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_5-68.jpg    "
              alt=""
            />
            <br />
            <img
              src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_6-65.jpg"
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="076554">
          <Accordion.Header>
            Homojen ve Heterojen Denge Tepkimeleri{" "}
          </Accordion.Header>
          <Accordion.Body>
            <img
              src="    https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_7-60.jpg     "
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="0999954">
          <Accordion.Header>
            Denge Sabitleri Ve Kısmi Basınç Arasaındaki İlişki{" "}
          </Accordion.Header>
          <Accordion.Body>
            <img
              src="      https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_8-56.jpg   "
              alt=""
            />
            <br />
            <img
              src="    https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_9-52.jpg     "
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="044456">
          <Accordion.Header>Dengede Hess Prensibi </Accordion.Header>
          <Accordion.Body>
            <img
              src="    https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_16-25.jpg     "
              alt=""
            />
            <br />
            <img
              src="   https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_17-14.jpg      "
              alt=""
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Funite;

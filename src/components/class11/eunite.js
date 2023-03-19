import React from "react";
import { Accordion } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Eunite = () => {
  return (
    <Accordion defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tepkime Hızı</Accordion.Header>
        <Accordion.Body>
          <img
            src="      https://www.eokultv.com/wp-content/uploads/2018/09/Screenshot_13.jpg    "
            alt=""
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="066">
        <Accordion.Header>Homojen Tepkime</Accordion.Header>
        <Accordion.Body>
          <img
            src="      https://www.eokultv.com/wp-content/uploads/2018/09/Screenshot_18.jpg    "
            alt=""
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="088">
        <Accordion.Header>Heterojen Tepkime</Accordion.Header>
        <Accordion.Body>
          <img
            src="       https://www.eokultv.com/wp-content/uploads/2018/09/Screenshot_19.jpg   "
            alt=""
          />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="044">
        <Accordion.Header>Ana Denklem</Accordion.Header>
        <Accordion.Body>
          <img
            src="      https://www.eokultv.com/wp-content/uploads/2018/09/Screenshot_24.jpg    "
            alt=""
          />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Eunite;

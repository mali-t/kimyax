import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Ccunite = () => {
  return (
    <Container>
      <nav className="acten">
        <Accordion defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Kütlece Yüzde Derişim</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_1-63.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hacimce Yüzde Derişim</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_2-63.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>ppm (Milyonda Bir Kısmı)</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_3-63.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>Mol kesri</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_4-59.jpg"
                alt=""
              />{" "}
              <br />
              Mol kesrinin birimi yoktur. <br />
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_5-60.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="067">
            <Accordion.Header>Molarite (Molar Derişim)</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_6-58.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="06997">
            <Accordion.Header>
              Çözeltilerin Deriştirilmesi ve Seyreltilmesi
            </Accordion.Header>
            <Accordion.Body>
              <img
                className="cucuk"
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_7-55.jpg"
                alt=""
              />
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_8-51.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="154">
            <Accordion.Header>Çözeltilerin Karıştırılması</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_9-47.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="40">
            <Accordion.Header>Molalite (Molal Derişim)</Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_10-41.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="167">
            <Accordion.Header>
              Kütlece Derişimin Molar Derişime Çevrilmesi
            </Accordion.Header>
            <Accordion.Body>
              <img
                src="https://www.eokultv.com/wp-content/uploads/2019/09/Screenshot_11-39.jpg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </nav>
    </Container>
  );
};

export default Ccunite;

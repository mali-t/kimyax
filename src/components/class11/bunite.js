import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "../../assets/scss/formuls.scss";

const Bbunite = () => {
  return (
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>ideal gaz yasası</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://www.eokultv.com/wp-content/uploads/2018/09/%C4%B0deal-gaz-denklemi-form%C3%BCl%C3%BC.jpg"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>gaz yoğunluğu</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEK2wgfN0N9ELAWUoO5Ime-pyyY8Dt6twFWQ&usqp=CAU"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>gaz yasaları</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://kimyaakademi.com/wp-content/uploads/2020/11/Ekran-Resmi-2020-11-11-11.54.23.png"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>gazların karıştırılması</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://kimyaakademi.com/wp-content/uploads/2020/11/Ekran-Resmi-2020-11-11-21.47.53.png"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>kısmi basınç</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://slideplayer.biz.tr/slide/2805457/10/images/33/K%C4%B1smi+Bas%C4%B1n%C3%A7+Ptop+%3D+Pa+%2B+Pb+%2B%E2%80%A6+Va+%3D+naRT%2FPtop+ve+Vtop+%3D+Va+%2B+Vb%2B%E2%80%A6+Va.jpg"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>toplam basınç</Accordion.Header>
        <Accordion.Body>
          <img
            src="https://slideplayer.biz.tr/slide/10555663/33/images/7/Manometreler+A%C3%A7%C4%B1k+u%C3%A7lu+manometre+ile+gaz+bas%C4%B1nc%C4%B1n%C4%B1n+%C3%B6l%C3%A7%C3%BClmesi.jpg"
            alt="chemist photo"
          />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>difüzyon hızı</Accordion.Header>
        <Accordion.Body>
          <img src={require("../../assets/img/yay.PNG")} alt="chemist photo" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Bbunite;

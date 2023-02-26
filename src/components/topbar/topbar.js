import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topbar.scss";

function Topbar({ fix }) {
  return (
    <nav className="top">
      <Navbar fixed={fix} expand="md" className="topbar">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="mr-auto justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className=" mr-auto">
              <NavDropdown title="11.Sınıf Üniteleri">
                <NavDropdown.Item as={Link} to="/11-1">
                  1. Ünite: Modern Atom Teorisi
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/11-2">
                  2. Ünite: Gazlar
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/11-3">
                  3. Ünite: Sıvı Çözeltiler ve Çözünürlük
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/11-4">
                  4. Ünite: Kimyasal Tepkimelerde Enerji
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/11-5">
                  5. Ünite: Kimyasal Tepkimelerde Hız
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/11-6">
                  6. Ünite: Kimyasal Tepkimelerde Denge
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="12.Sınıf Üniteleri">
                <NavDropdown.Item as={Link} to="/12-1">
                  1. Ünite: Kimya ve Elektrik
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/12-2">
                  2. Ünite: Karbon Kimyasına Giriş
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/12-3">
                  3. Ünite: Organik Bileşikler
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/12-4">
                  4. Ünite: Enerji Kaynakları ve{" "}
                  <span className="var">
                    <br />
                  </span>
                  Bilimsel Gelişmeler
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>periyodik tablo</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default Topbar;

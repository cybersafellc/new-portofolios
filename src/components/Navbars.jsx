import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Notoficatiion from "./Notification";
import { useEffect, useState } from "react";

const Navbars = (props) => {
  const [notfification, setNotification] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 10000);
    }, 3000);
  }, []);
  return (
    <>
      <Navbar
        data-aos="fade-down"
        expand="lg"
        className="bg-white border-bottom shadow py-3 position-fixed w-100 Navbars index-2"
      >
        <Container fluid className="px-md-5">
          <Navbar.Brand
            href="#home"
            className="fs-5 fw-bold hover-ungu text-dark"
          >
            RUSNANDA PURNAMA
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0 focus-ring focus-ring-0"
          >
            <div className="humberger-menu">
              <input type="checkbox"></input>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex gap-5 py-5 py-lg-0 fs-custom text-sans-pro align-items-center">
              <Nav.Link className="hover-ungu" onClick={props.Homes}>
                Home
              </Nav.Link>
              <Nav.Link className="hover-ungu" onClick={props.aboutMe}>
                About
              </Nav.Link>
              <Nav.Link className="hover-ungu " onClick={props.Project}>
                Project
              </Nav.Link>
              <Nav.Link className="hover-ungu" onClick={props.Contact}>
                Contact
              </Nav.Link>
              <Nav.Link className="position-relative">
                <Button
                  className="bg-ungu d-flex align-items-center gap-1"
                  onClick={props.DownloadCv}
                >
                  Download My CV <i class="bx bxs-download fs-6"></i>
                </Button>
                {notfification && <Notoficatiion />}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navbars;

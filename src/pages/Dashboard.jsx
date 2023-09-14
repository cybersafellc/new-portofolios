import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import Navbars from "../components/Navbars";
import Sosmed from "../components/Sosmed";
import imgLaptop from "../Assets/img/laptop-main.png";
import imgProject1 from "../Assets/img/project1.PNG";
import imgProject2 from "../Assets/img/project2.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Typewriter from "../components/Typewritter";
import MydModalWithGrid from "./../components/Modals";
import axios from "axios";
import imgSuccess from "../Assets/img/successfully-done-5627021-4699001.gif";
import imgEror from "../Assets/img/eror.gif";

const Dashboard = () => {
  const Home = useRef();
  const Aboutme = useRef();
  const Project = useRef();
  const Contact = useRef();
  const handleredirect = (navigate) => {
    navigate.current.scrollIntoView({ behavior: "smooth" });
  };
  const Githubredirecrt = (url) => {
    window.location.href = url;
  };
  const Goto = (url) => {
    window.location.href = url;
  };
  const [modalShow, setModalShow] = useState(false);
  const [response, setresponse] = useState(true);
  const [responseSuccess, setresponseSuccess] = useState(false);
  const [responEror, setresponEror] = useState(false);
  const [dataFatch, setDatafetch] = useState("");
  const handleCOntactSent = (e) => {
    e.preventDefault();
    axios
      .post("https://formspree.io/f/xoqowekd", {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      })
      .then((ress) => {
        setDatafetch(ress.status);
      })
      .catch((err) => {
        setDatafetch(err.response.status);
      });
  };
  useEffect(() => {
    if (dataFatch == "200") {
      setresponse(false);
      setresponseSuccess(true);
    } else if (dataFatch == "400") {
      setresponse(false);
      setresponEror(true);
    }
  }, [dataFatch]);
  const handleTryagain = () => {
    setresponse(true);
    setresponEror(false);
    setDatafetch("");
  };
  return (
    <>
      <Navbars
        aboutMe={() => handleredirect(Aboutme)}
        Project={() => handleredirect(Project)}
        Contact={() => handleredirect(Contact)}
        Homes={() => handleredirect(Home)}
        DownloadCv={() =>
          Goto(
            "https://drive.google.com/file/d/1-T_JL6mYjO8M9krmUsXRIGRHXDyL5vfo/view?usp=sharing"
          )
        }
      />
      <section
        className="d-flex justify-content-center align-items-center"
        ref={Home}
      >
        <div className="background"></div>
        <Container>
          <Card className="bg-transparant border-0">
            <Card.Body className="bg-transparant d-flex flex-column justify-content-center align-items-center">
              <h1 className="display-4 ">
                <Typewriter text={`HEY, I'M RUSNANDA PURNAMA`} />
              </h1>
              <p className="mt-4 fs-5 text-secondary">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications
              </p>
              <Button
                className="mt-4 bg-ungu py-3 px-5 fs-4 fw-bold width-custom button-project"
                onClick={() => handleredirect(Project)}
              >
                PROJECTS
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <div className="mouse" onClick={() => handleredirect(Aboutme)}>
          <span></span>
        </div>
        <Sosmed />
      </section>
      <section className="py-custom bg-aboutme" ref={Aboutme}>
        <Container>
          <Row className="g-5 ">
            <Col xs="12 d-flex justify-content-center align-items-center flex-column gap-4 mb-5">
              <h1 className="fw-bold" data-aos="fade-down">
                ABOUT ME
              </h1>
              <div className="line"></div>
              <p className="fs-5 text-secondary w-50 text-center text-headers">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </p>
            </Col>
            <Col md="6 d-flex flex-column gap-3" data-aos="fade-right">
              <h3 className="fw-bold">Get To Knowme!</h3>
              <p className="fs-5 text-secondary">
                I'm a Frontend Web Developer building the Front-end of Websites
                and Web Applications that leads to the success of the overall
                product. Check out some of my work in the Projects section.
              </p>
              <p className="fs-5 text-secondary">
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming
              </p>
              <p className="fs-5 text-secondary">
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me.
              </p>
              <Button
                className="py-2 px-5 bg-ungu w-custom"
                onClick={() => handleredirect(Contact)}
              >
                CONTACT
              </Button>
            </Col>
            <Col md="6 d-flex flex-column gap-4" data-aos="fade-left">
              <h3 className="fw-bold">My Skills</h3>
              <Card className="border-0 p-0 bg-aboutme">
                <Card.Body className="border-0 p-0 skills-wrapper">
                  <div>HTML</div>
                  <div>CSS</div>
                  <div>Bootstrap</div>
                  <div>Javascript</div>
                  <div>React JS</div>
                  <div>Github</div>
                  <div>Responsive Design</div>
                  <div>SEO</div>
                  <div>Terminal</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-custom" ref={Project}>
        <Container>
          <Row className="g-5 ">
            <Col xs="12 d-flex justify-content-center align-items-center flex-column gap-4 mb-5">
              <h1 className="fw-bold " data-aos="fade-down">
                PROJECTS
              </h1>
              <div className="line"></div>
              <p className="fs-5 text-secondary w-50 text-center text-headers">
                Here you will find some of the personal and clients projects
                that I created with each project containing its own case study
              </p>
            </Col>
            <Col md="6 container-laptop" data-aos="fade-right">
              <Image className="w-100" src={imgLaptop} />
              <Image className="img-absolute w-75" src={imgProject1} />
            </Col>
            <Col
              className="d-flex flex-column justify-content-center gap-4"
              data-aos="fade-left"
            >
              <h3 className="fw-bold">IP Tracker</h3>
              <p className="fs-5 text-secondary">
                IP Tracker is my first project, it's not perfect because it
                doesn't use React JS. However, here I have consumed the API
              </p>
              <Button
                className="py-2 px-5 bg-ungu w-custom w-50 button-view-projrct"
                variant="primary"
                onClick={() =>
                  Githubredirecrt(
                    "https://cybersafellc.github.io/08-14-2023-ip-tracker/"
                  )
                }
              >
                VIEW PROJECT
              </Button>
            </Col>
            <Col md="6 container-laptop" data-aos="fade-right">
              <Image className="w-100" src={imgProject2} />
              <Image className="img-absolute w-75" src={imgProject2} />
            </Col>
            <Col
              className="d-flex flex-column justify-content-center gap-4"
              data-aos="fade-left"
            >
              <h3 className="fw-bold">Job Hunter</h3>
              <p className="fs-5 text-secondary">
                Job hunter is a front end template that I created using Ract js
                and the library" in it.
              </p>
              <Button
                className="py-2 px-5 bg-ungu w-custom w-50 button-view-projrct"
                variant="primary"
                onClick={() =>
                  Githubredirecrt(
                    "https://cybersafellc.github.io/website-loker/"
                  )
                }
              >
                VIEW PROJECT
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-custom bg-aboutme" ref={Contact}>
        <Container>
          <Row className="g-5 ">
            <Col xs="12 d-flex justify-content-center align-items-center flex-column gap-4 mb-5">
              <h1 className="fw-bold" data-aos="fade-down">
                CONTACT
              </h1>
              <div className="line"></div>
              <p className="fs-5 text-secondary w-50 text-center text-headers">
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </p>
            </Col>
          </Row>
          <Col xs="12 d-flex justify-content-center" data-aos="fade-up">
            {response && (
              <Card className="shadow w-75 rounded-2">
                <Card.Body>
                  <Form className="p-4" onSubmit={handleCOntactSent}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className="bg-secondary bg-opacity-25"
                        name="name"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        className="bg-secondary bg-opacity-25"
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1 "
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        className="bg-secondary bg-opacity-25"
                        name="message"
                      />
                    </Form.Group>
                    <Button className="bg-ungu" type="submit">
                      Sent
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            )}
            {responseSuccess && (
              <Card className="shadow w-75 rounded-2 p-5">
                <Card.Body className="d-flex justify-content-center align-items-center">
                  <Image className="w-25" src={imgSuccess} />
                </Card.Body>
              </Card>
            )}
            {responEror && (
              <Card className="shadow w-75 rounded-2 p-5 bg-eror">
                <Card.Body className="d-flex justify-content-center align-items-center flex-column gap-5">
                  <Image className="w-25" src={imgEror} />
                  <Button className="bg-ungu" onClick={handleTryagain}>
                    Try again
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Col>
        </Container>
      </section>
      <footer className="bg-dark py-5">
        <Container data-aos="fade-up">
          <Row className="g-5">
            <Col md="8">
              <h4 className="text-white fw-bold mb-4">RUSNANDA PURNAMA</h4>
              <p className="fs-6 text-light">
                RUSNANDA PURNAMA A Frontend focused Web Developer building the
                Frontend of Websites and Web Applications
              </p>
            </Col>
            <Col md="4">
              <h4 className="text-white fw-bold mb-4">SOCIAL</h4>
              <div className="text-light fs-1 d-flex gap-3">
                <i class="bx bxl-linkedin-square"></i>
                <i class="bx bxl-github"></i>
                <i class="bx bxl-youtube"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-facebook-square"></i>
              </div>
            </Col>
            <Col xs="12">
              <div className="strip"></div>
              <div className="d-flex justify-content-center align-items-center pt-5">
                <span className="text-secondary">
                  © Copyright 2023. Made by Rusnanda Purnama
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Dashboard;

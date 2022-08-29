import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "RE-FLOW.",
      description: "Home Page",
      imgUrl: 'https://i.ibb.co/cN7S4Cd/img1.png',
    },
    {
      title: "RE-FLOW.",
      description: "Sign-In Page",
      imgUrl: 'https://i.ibb.co/XDj3sst/img2.png',
    },
    {
      title: "RE-FLOW.",
      description: "Register Page",
      imgUrl: 'https://i.ibb.co/8jmbWMr/img3.png',
    },
    {
      title: "RE-FLOW.",
      description: "Shop Categories",
      imgUrl: 'https://i.ibb.co/2dCGRWz/img4.png',
    },
    {
      title: "RE-FLOW.",
      description: "Products Page",
      imgUrl: 'https://i.ibb.co/TRPV9vv/img5.png',
    },
    {
      title: "RE-FLOW.",
      description: "Cart Page",
      imgUrl: 'https://i.ibb.co/HPd3zQY/img6.png',
    },
  ];
  const projects2 = [
    {
      title: "Face-Recog.",
      description: "Home Page",
      imgUrl: 'https://i.ibb.co/g6X6bMM/img10.png',
    },
    {
      title: "Face-Recog.",
      description: "Sign-In Page",
      imgUrl: 'https://i.ibb.co/KLvw1Kr/img8.png',
    },
    {
      title: "Face-Recog.",
      description: "Register Page",
      imgUrl: 'https://i.ibb.co/rx6TxCn/img9.png',
    },
  ];
  const projects3 = [
    {
      title: "Gradient Generator",
      description: "Home Page",
      imgUrl: 'https://i.ibb.co/PzQkcmx/img7.png',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Please find the projects that I have worked on below, and I have also added a link to the deployed versions so feel free to checkout and give a feedback.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">RE-FLOW.</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Face_Recog. Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Gradient Gen.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <p><a href='https://rananjay-reflow.netlify.app/' target='blank'>RE-FLOW.</a> is an e-commerce website built using React and REDUX, where user can register, sign-in, add products to cart and even checkout using the Stripe payment gateway!</p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p><a href='https://rananjay-face-recog.herokuapp.com/' target='blank'>Face Recog</a> is a hobby project that uses the Clarifai machine learning API, and user can upload image links and it generates an output of the same image with a box enclosing the detected faces in the image.</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p><a href='https://rananjaysingh20.github.io/background-generator/' target='blank'>Gradient Gen</a> is a basic HTML, CSS and JavaScript project, created due to the constant need of searching for linear gradients online. This webpage allows us to set the gradient of the html page in real time and we can choose what looks best according to our needs.</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}

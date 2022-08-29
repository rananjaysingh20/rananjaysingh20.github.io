import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src='https://i.ibb.co/SdntWff/Untitled-1.png' alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rananjay-singh-79571b1b9/" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.instagram.com/_rananjay_singh_/" target="blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/_rananjay_singh_/" target="blank"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Do reach out to leave a feedback!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

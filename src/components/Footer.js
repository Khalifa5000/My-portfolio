import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/images.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/icons8-github.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamed-khalifa-b5375623a/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=100008344484144" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mohamed_khalifa5000/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Khalifa5000" target="_blank"><img  src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
            <p>Designed by 🧡 Mohamed Khalifa</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

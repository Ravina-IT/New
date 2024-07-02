import '../stylesheets/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <section id='footer'>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={4} className='d-flex align-items-center justify-content-center mb-3'>
            <div className='icon'><FaLocationDot /></div>
            <div className='contact-para'>Perundurai, Erode, <br /> Tamil Nadu - 638052</div>
          </Col>
          <Col xs={12} sm={4} className='d-flex align-items-center justify-content-center mb-3'>
            <div className='icon'><FaPhoneAlt /></div>
            <div className='contact-para'>8438881820</div>
          </Col>
          <Col xs={12} sm={4} className='d-flex align-items-center justify-content-center mb-3'>
            <div className='icon'><IoIosMail /></div>
            <div className='contact-para'>ravina2025.it@gmail.com</div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <center><p>Copyrights &copy; <span className='foot-name'>RAVINA</span></p></center>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;

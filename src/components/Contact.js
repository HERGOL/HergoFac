import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Partager vos Documents avec les autres.</h2>
                <form action="https://getform.io/f/537ce659-56e8-4936-9e04-b19e0387cd1b" method="POST" enctype="multipart/form-data">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="name" placeholder="Prénom" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="email" name="email" placeholder="Email" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    <input type="text" name="département" placeholder="Votre département" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="Module" placeholder="Module du document" />
                    </Col>
                    <Col size={12} className="px-1">
                    <input type="file" name="document" required/>
                      <button type="submit"><span>Envoyer</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

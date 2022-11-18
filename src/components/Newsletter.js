import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";


export const Newsletter = () => {
  

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Abonnez-vous à la newsletter<br></br>Pour recevoir des news sur le site et avoir accès aux bêta.</h3>

            </Col>
            <Col md={6} xl={7}>
              <form   action="https://formspree.io/f/xkneegpo" method="POST">
                <div className="new-email-bx">
                  <input type="email" name="email" placeholder="Email Address" required/>
                  <button type="submit">Envoyer</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}

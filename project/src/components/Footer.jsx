import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube  } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='mt-3 mt-md-0'>
          <Col md={3}>
            <Link to="/">
              <span id="logo">AAKRITHI</span>
            </Link>
          </Col>
          <Col md={6}>
            <div className='d-flex gap-4  justify-content-md-center gap-lg-5 mt-5 mt-md-0 flex-column flex-md-row'>
              <Link to="#">About</Link>
              <Link to="#">Privacy</Link>
              <Link to="#">Policy</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </Col>
          <Col md={3} className="gap-4 d-flex ms-auto justify-content-md-end mt-5 mt-md-0">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
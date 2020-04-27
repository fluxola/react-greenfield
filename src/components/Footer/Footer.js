import React from 'react';
import { Container, Row, Col, Navbar, NavLink } from 'reactstrap';



const Footer = () => (
  <div className="Footer">
    <Container>
      <Navbar>
        <NavLink href='https://www.instagram.com/'>
          <h3 style={{ paddingTop:'12px'}}>
            <i style={{  color:'#e95950' }}  className="fab fa-instagram"></i>
          </h3>
        </NavLink>
        <NavLink href='https://www.facebook.com/'>
          <h3 style={{ paddingTop:'12px'}}>
            <i style={{  color:'#4267b2' }} className="fab fa-facebook-square"></i>
          </h3>
        </NavLink>
        <NavLink href='https://www.twitter.com/'>
          <h3 style={{ paddingTop:'12px'}}>
            <i style={{  color:'#2fc2ef' }}  className="fab fa-twitter"></i>
          </h3>
        </NavLink>
      </Navbar>
      <Row style={{paddingTop: 12}}>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>This Business!</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <a href="mailto:$EMAIL" target="_top"><h6>$EMAIL</h6></a>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <a href="tel:$PHONE_NUMBER"><h6>$PHONE_NUMBER</h6></a>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>$STREET_ADDRESS</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>$CITY_ZIP</h6>
        </Col>
        <Col xs='12' sm='12' md='12' lg='2'>
          <h6>©$COPYRIGHT_YEAR $COPYRIGHT_OWNER</h6>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
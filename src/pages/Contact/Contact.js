import React from 'react';
import { Row, Col, Container } from 'reactstrap';


class Contact extends React.Component {
  render() {
    return(
      <Container className='contact-page'> 
        <Row>
          <Col style={{textAlign: 'center'}} xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h3>
              <a href="mailto:$EMAIL" target="_top">email: $EMAIL</a>
            </h3>
            <h3>
              <a href="tel:PHONE_NUMBER">phone: $PHONE_NUMBER</a>
            </h3>
          </Col>
        </Row>
      </Container>  
    );
  }
}
export default Contact;
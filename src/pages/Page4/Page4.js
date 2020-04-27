import React from 'react';
import { Row, Col, Container, Card, CardImg } from 'reactstrap';


class Page4 extends React.Component {
  render() {
    return(
      <Container className='page'>
          <Row style={{textAlign: 'center', paddingTop: 24 }}>
            <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
              <h2>
                $PAGE_4
              </h2>
            </Col>
          </Row>
          <Row className='align-items-center'>
          </Row>
      </Container>  

    );
  }
}
export default Page4;
import React from 'react';
import { Row, Col, Container, Button, Collapse, Card, CardBody, CardImg } from 'reactstrap';


class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }


  renderSecondBlock() {
    return(
      <Container>
        <Row className='align-items-center' style={{paddingTop: 36}}>
        </Row>
      </Container>  

    );
  }

  render() {
    return (
      <div className='page'>
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
          <Col xs='12' sm='12' md='12' lg={{size: 4, offset: 4}}>
            <h2>
              $PAGE_3
            </h2>
          </Col>
        </Row>
        {this.renderSecondBlock()}
        <Row style={{textAlign: 'center', paddingTop: 24 }}>
        </Row>
      </div>
    );
  }
}

export default Page3;
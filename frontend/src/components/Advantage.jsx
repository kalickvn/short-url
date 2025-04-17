import React from 'react'
import {Row,Col,Card} from 'react-bootstrap';
const Advantage = () => {
  return (
    <>
      <h3 className="mt-5">Advanced Statistics</h3>
              <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      
              <Row className="mt-4 text-start">
                <Col md={4} className="mb-4">
                  <Card className="p-3">
                    <h5>Brand Recognition</h5>
                    <p>Boost your brand recognition with each click. Branded links help instil confidence in your content.</p>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="p-3">
                    <h5>Detailed Records</h5>
                    <p>Gain insights into who is clicking your links. Knowing when and where helps you make informed decisions.</p>
                  </Card>
                </Col>
                <Col md={4} className="mb-4">
                  <Card className="p-3">
                    <h5>Fully Customizable</h5>
                    <p>Improve brand awareness and content discoverability through customizable links.</p>
                  </Card>
                </Col>
              </Row>
    </>
  )
}

export default Advantage;
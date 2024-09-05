import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './CollectionSummary.css'; // Import the CSS file

function CollectionSummary() {
  const [formData, setFormData] = useState({
    festival: '',
    fromDate: '',
    toDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container className="collection-summary-container my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h3 className="text-center mb-4">Search Division Wise Application Report</h3>
          <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
            <Row>
              <Col md={12}>
                <div >
                  <Form.Group controlId="formFestival">
                    <Form.Label>Select Festival:</Form.Label>
                    <Form.Control
                      as="select"
                      name="festival"
                      value={formData.festival}
                      onChange={handleChange}
                    >
                      <option value="">Select Festival</option>
                      <option>Navratri</option>
                      <option>Mahanirvan Din</option>
                      <option>Ambedkar Jayanti</option>
                      <option>Ganesh Utsav</option>
                      <option>Shiv Jayanti</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </Col>
              <Col md={6} className="mt-3">
                <div className='formarrange'>
                  <Form.Group controlId="formFromDate">
                    <Form.Label>From Date:</Form.Label>
                    <Form.Control
                      type="date"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              </Col>
              <Col md={6} className="mt-3">
                <div className='formarrange'>
                  <Form.Group controlId="formToDate">
                    <Form.Label>To Date:</Form.Label>
                    <Form.Control
                      type="date"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CollectionSummary;

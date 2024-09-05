import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DivisionwiseReports.css';

function DivisionwiseReports() {
  return (
    <Container className="division-reports-container">
      <Row className="justify-content-center">
        <h3 className="text-center mb-4">Division Wise Application Report as on Date 28/08/2024</h3>
        <Col xs={12} md={6}>
          <Card className="mt-5">
            <Card.Body>
              <Card.Title className="text-center mb-4">Search Division Wise Application Report</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formFestival">
                  <Form.Label>Select Festival:</Form.Label>
                  <Form.Control as="select">
                    <option>Select Festival</option>
                    <option>Navratri</option>
                    <option>Mahanirvan Din</option>
                    <option>Ambedkar Jayanti</option>
                    <option>Ganesh Utsav</option>
                    <option>Shiv Jayanti</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Form>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicFromDate">
                  <Form.Label>From Date:</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicToDate">
                  <Form.Label>To Date:</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DivisionwiseReports;
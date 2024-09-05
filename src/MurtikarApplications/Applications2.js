import React from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';

function Applications2() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
        <h2>Murtikar / Stockist / Saler Applications (All)</h2>
          
          <Card className="mt-5">
            <Card.Body>
              <Card.Title className="text-center">Search Applications</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formApplicationNo">
                  <Form.Label>Application No.</Form.Label>
                  <Form.Control type="text" placeholder="Enter Application No." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFestival">
                  <Form.Label>Select Festival</Form.Label>
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

                <Form.Group className="mb-3" controlId="formApplicantName">
                  <Form.Label>Applicant / Shop Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Applicant/Shop Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formApplicantAddress">
                  <Form.Label>Applicant / Shop Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Applicant/Shop Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFromDate">
                  <Form.Label>From Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formToDate">
                  <Form.Label>To Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Search
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Applications2;

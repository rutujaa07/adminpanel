import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ApplicationstatusReport.css";

function ApplicationstatusReport() {
  return (
    <Container fluid className="application-status-container p-4">
      <h2 className="report-title">
        Application Status Report as on Date 28/08/2024
      </h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {/* <Card className="mt-3 search-card">
            <Card.Body>
              <Card.Title className="text-center mb-4">Search Application Status Report</Card.Title>
              <Form className="d-flex flex-column">
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
                <Form.Group className="mb-3" controlId="formBasicFromDate">
                  <Form.Label>From Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicToDate">
                  <Form.Label>To Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit" className="w-50 me-2">
                    Submit
                  </Button>
                  <Button variant="success" type="reset" className="w-50">
                    Reset
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card> */}

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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicdate">
              <Form.Label>From date : </Form.Label>
              <Form.Control type="date" placeholder="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicdate">
              <Form.Label>To date:</Form.Label>
              <Form.Control type="date" placeholder="date" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ApplicationstatusReport;

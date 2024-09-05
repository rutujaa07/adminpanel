import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './GeneratedDemandsPages.css'; 

function GenerateDemandsPage() {
  return (
    <Container className="my-5">
      <h2>Generate Demands</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formFestivalName">
          <Form.Label>Festival Name</Form.Label>
          <Form.Control type="text" placeholder="Enter festival name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApplicantName">
          <Form.Label>Applicant Name</Form.Label>
          <Form.Control type="text" placeholder="Enter applicant name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContactNo">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control type="text" placeholder="Enter contact number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMandalName">
          <Form.Label>Mandal Name</Form.Label>
          <Form.Control type="text" placeholder="Enter mandal name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMandalAddress">
          <Form.Label>Mandal Address</Form.Label>
          <Form.Control type="text" placeholder="Enter mandal address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDemandDate">
          <Form.Label>Demand Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Generate
        </Button>
      </Form>
    </Container>
  );
}

export default GenerateDemandsPage;

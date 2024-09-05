import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Table, Modal } from 'react-bootstrap';

function ApprovedApplications() {
  const [formData, setFormData] = useState({
    festivalName: '',
    applicantName: '',
    shopName: '',
    shopAddress: '',
    fromDate: '',
    toDate: ''
  });

  const [data, setData] = useState([
    { id: 1, appNo: 'MSF8591111', dateTime: '11/08/2023 04:49:10 PM', festival: 'Ganesh Utsav', applicant: 'shantanu naik', address: 'test', contactNo: '9284648352', shopName: 'test fsdfsf', shopAddress: 'sfsdf' },
    { id: 2, appNo: 'MSF5185122', dateTime: '11/08/2023 05:28:16 PM', festival: 'Ganesh Utsav', applicant: 'Prasad Sonar', address: 'RAne nagar', contactNo: '9370504641', shopName: 'mayureshwar', shopAddress: 'rane nagar' },
    { id: 3, appNo: 'MSF1083113', dateTime: '01/09/2023 04:09:22 PM', festival: 'Ganesh Utsav', applicant: 'prasad', address: 'test', contactNo: '9370504641', shopName: 'test', shopAddress: 'test' }
  ]);

  const [show, setShow] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleClose = () => setShow(false);
  const handleShow = (application) => {
    setSelectedApplication(application);
    setShow(true);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <h2>Pending Applications (All)</h2>
          <h3>Search Application</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFestivalName">
              <Form.Label>Select Festival Name</Form.Label>
              <Form.Control
                as="select"
                name="festivalName"
                value={formData.festivalName}
                onChange={handleChange}
              >
                <option value="">--Select Festival Name--</option>
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
              <Form.Control
                type="text"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formShopName">
              <Form.Label>Applicant / Shop Address</Form.Label>
              <Form.Control
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formShopAddress">
              <Form.Label>Shop Address</Form.Label>
              <Form.Control
                type="text"
                name="shopAddress"
                value={formData.shopAddress}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFromDate">
              <Form.Label>From Date</Form.Label>
              <Form.Control
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formToDate">
              <Form.Label>To Date</Form.Label>
              <Form.Control
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col xs={12}>
          <h3>Search Results</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Application No.</th>
                <th>Application Date/Time</th>
                <th>Festival Name</th>
                <th>Applicant Name</th>
                <th>Address</th>
                <th>Contact No.</th>
                <th>Shop Name</th>
                <th>Shop Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.appNo}</td>
                  <td>{item.dateTime}</td>
                  <td>{item.festival}</td>
                  <td>{item.applicant}</td>
                  <td>{item.address}</td>
                  <td>{item.contactNo}</td>
                  <td>{item.shopName}</td>
                  <td>{item.shopAddress}</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleShow(item)}>View</Button>{' '}
                    <Button variant="secondary" size="sm">Edit</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header >
          <Modal.Title>Application Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApplication && (
            <div>
              <p><strong>Application No.:</strong> {selectedApplication.appNo}</p>
              <p><strong>Date/Time:</strong> {selectedApplication.dateTime}</p>
              <p><strong>Festival Name:</strong> {selectedApplication.festival}</p>
              <p><strong>Applicant Name:</strong> {selectedApplication.applicant}</p>
              <p><strong>Address:</strong> {selectedApplication.address}</p>
              <p><strong>Contact No.:</strong> {selectedApplication.contactNo}</p>
              <p><strong>Shop Name:</strong> {selectedApplication.shopName}</p>
              <p><strong>Shop Address:</strong> {selectedApplication.shopAddress}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ApprovedApplications;

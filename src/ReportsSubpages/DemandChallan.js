import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import './DemandChallan.css';

function DemandChallan() {
  const demands = [
    {
      id: 1,
      festivalName: "Shiv Jayanti",
      applicantName: "Amol Satish Kumbkarn",
      address: "1863 Old Tambat Len Nashik",
      contactNo: "9822491104",
      mandalName: "Shree Raje Chatrpati Samajik Sanskrutik Kala Krida Mandal",
      mandalAddress: "Old Tambat Len",
      demandDate: "2024-09-01"
    },
    {
      id: 2,
      festivalName: "Shiv Jayanti",
      applicantName: "Mahesh Chandwadkar",
      address: "House No 45, Main Road Nashik",
      contactNo: "9021561062",
      mandalName: "Main Road Mitra Mandal",
      mandalAddress: "Dhumal Point, Main Road, Nashik",
      demandDate: "2024-08-25"
    },
    {
      id: 3,
      festivalName: "Shiv Jayanti",
      applicantName: "Kalpesh Ashok Borade",
      address: "Shivsadan, Jailroad, Nashik",
      contactNo: "9909394994",
      mandalName: "Samarth Seva Mandal",
      mandalAddress: "Shani Mandir Chowk, Nashik Road",
      demandDate: "2024-08-30"
    },
  ];

  const [filteredDemands, setFilteredDemands] = useState(demands);
  const [selectedDemand, setSelectedDemand] = useState(null);
  const [show, setShow] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleShow = (demand) => {
    setSelectedDemand(demand);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleSearch = () => {
    const filtered = demands.filter(demand => {
      const demandDate = new Date(demand.demandDate);
      const from = new Date(fromDate);
      const to = new Date(toDate);

      return demandDate >= from && demandDate <= to;
    });
    setFilteredDemands(filtered);
  };

  const handleReset = () => {
    setFilteredDemands(demands);
    setFromDate('');
    setToDate('');
  };

  return (
    <Container fluid className="demand-challan-container p-4">
      <h3 className="report-title">Demand Challan Report as on Date 02/09/2024</h3>
      <Card className="mt-3 search-card">
        <Card.Body>
          <Card.Title className="text-center mb-4">Search Demand Challan Report</Card.Title>
          <Form className="d-flex justify-content-between align-items-end">
            <Form.Group controlId="formBasicFromDate" className="me-3">
              <Form.Label>From Date:</Form.Label>
              <Form.Control type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicToDate" className="me-3">
              <Form.Label>To Date:</Form.Label>
              <Form.Control type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </Form.Group>
            <div className="d-flex">
              <Button variant="primary" className="me-2" onClick={handleSearch}>
                Search
              </Button>
              <Button variant="success" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Festival Name</th>
            <th>Applicant Name</th>
            <th>Address</th>
            <th>Contact No</th>
            <th>Mandal Name</th>
            <th>Mandal Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredDemands.map((demand) => (
            <tr key={demand.id}>
              <td>{demand.festivalName}</td>
              <td>{demand.applicantName}</td>
              <td>{demand.address}</td>
              <td>{demand.contactNo}</td>
              <td>{demand.mandalName}</td>
              <td>{demand.mandalAddress}</td>
              <td>
                <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow(demand)}>View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Demand Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDemand && (
            <div>
              <p><strong>Festival Name:</strong> {selectedDemand.festivalName}</p>
              <p><strong>Applicant Name:</strong> {selectedDemand.applicantName}</p>
              <p><strong>Address:</strong> {selectedDemand.address}</p>
              <p><strong>Contact No:</strong> {selectedDemand.contactNo}</p>
              <p><strong>Mandal Name:</strong> {selectedDemand.mandalName}</p>
              <p><strong>Mandal Address:</strong> {selectedDemand.mandalAddress}</p>
              <p><strong>Demand Date:</strong> {selectedDemand.demandDate}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DemandChallan;

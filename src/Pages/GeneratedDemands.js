import React, { useState } from "react";
import { Button, Table, Container, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./GeneratedDemands.css";

function GeneratedDemands() {
  const [show, setShow] = useState(false);
  const [selectedDemand, setSelectedDemand] = useState(null);
  const navigate = useNavigate();

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
  
  const handleClose = () => setShow(false);
  const handleShow = (demand) => {
    setSelectedDemand(demand);
    setShow(true);
  };

  const handleGenerateDemands = () => {
    navigate('/generate-demands');
  };

  return (
    <Container className="generated-demands my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Manage Generated Demands</h2>
        <Button variant="primary" size="sm" onClick={handleGenerateDemands}>
          Generate Demands
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Festival Name</th>
            <th>Applicant Name</th>
            <th>Address</th>
            <th>Contact No.</th>
            <th>Mandal Name</th>
            <th>Mandal Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {demands.map((demand, index) => (
            <tr key={demand.id}>
              <td>{index + 1}</td>
              <td>{demand.festivalName}</td>
              <td>{demand.applicantName}</td>
              <td>{demand.address}</td>
              <td>{demand.contactNo}</td>
              <td>{demand.mandalName}</td>
              <td>{demand.mandalAddress}</td>
              <td>
                <Button variant="primary" size="sm" className="me-2" onClick={() => handleShow(demand)}>View</Button>
                <Button variant="secondary" size="sm">View Demands</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header >
          <Modal.Title>Demand Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDemand && (
            <div>
              <p><strong>Festival Name:</strong> {selectedDemand.festivalName}</p>
              <p><strong>Applicant Name:</strong> {selectedDemand.applicantName}</p>
              <p><strong>Address:</strong> {selectedDemand.address}</p>
              <p><strong>Contact No.:</strong> {selectedDemand.contactNo}</p>
              <p><strong>Mandal Name:</strong> {selectedDemand.mandalName}</p>
              <p><strong>Mandal Address:</strong> {selectedDemand.mandalAddress}</p>
              <p><strong>Demand Date:</strong> {selectedDemand.demandDate}</p>
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

export default GeneratedDemands;

import React, { useState } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa";
import './UploadedPermissions.css';
// import { useNavigate } from 'react-router-dom';

function UploadedPermissions() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);
  // const navigate = useNavigate()

  const permissions = [
    { id: 1, appNo: 'GAN8273543154', festivalName: 'Ganesh Utsav', applicantName: 'Pratik Vivek Kadam', address: '686 Gangawadi Ghass Bajar Ravivar Peth Nashik 1', contactNo: '9021153598', mandalName: 'Gangawadi Mitra Mandal', mandalAddress: '686 Gangawadi Ghass Bajar Ravivar Peth Nashik 1' },
    { id: 2, appNo: 'GAN4622443153', festivalName: 'Ganesh Utsav', applicantName: 'Dhiraj Bhavansingh Chavhan', address: 'Cidco, Nashik', contactNo: '9130854501', mandalName: 'Sahyadri Nagar Mitr Mandal', mandalAddress: 'Sahyadri Nagar Mitr Mandal' },
    { id: 3, appNo: 'GAN2921333151', festivalName: 'Ganesh Utsav', applicantName: 'Avinash Baisane', address: 'Shramik Nagar, Satpur, Nashik', contactNo: '7410189571', mandalName: 'Sai Yuva Pratishthan', mandalAddress: 'Shramik Nagar' }
  ];

  const handleClose = () => setShowModal(false);
  const handleShow = (permission) => {
    setSelectedPermission(permission);
    setShowModal(true);
  };
 
  // const handleuploadpermit= () => {
  //   navigate('/uploadpermissionspage');
  // };


  return (
    <div className="uploaded-permissions">
      <h2>Uploaded Permissions</h2>
      <Button variant="primary"><FaPlus  />Upload Permission</Button>{' '}
      <Button variant="primary"><FaPlus    />Generate Permission</Button>{' '}


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>App No</th>
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
          {permissions.map((permission, index) => (
            <tr key={permission.id}>
              <td>{index + 1}</td>
              <td>{permission.appNo}</td>
              <td>{permission.festivalName}</td>
              <td>{permission.applicantName}</td>
              <td>{permission.address}</td>
              <td>{permission.contactNo}</td>
              <td>{permission.mandalName}</td>
              <td>{permission.mandalAddress}</td>
              <td>
                <Button
                  variant="primary"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShow(permission)}
                >
                  View
                </Button>
                <Button variant="secondary" size="sm">
                  View Demands
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Header >
          <Modal.Title>Permission Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPermission && (
            <div>
              <p><strong>Application No.:</strong> {selectedPermission.appNo}</p>
              <p><strong>Festival Name:</strong> {selectedPermission.festivalName}</p>
              <p><strong>Applicant Name:</strong> {selectedPermission.applicantName}</p>
              <p><strong>Address:</strong> {selectedPermission.address}</p>
              <p><strong>Contact No.:</strong> {selectedPermission.contactNo}</p>
              <p><strong>Mandal Name:</strong> {selectedPermission.mandalName}</p>
              <p><strong>Mandal Address:</strong> {selectedPermission.mandalAddress}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UploadedPermissions;

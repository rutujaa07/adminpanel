import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'; 

function Dashboard() {
  return (
    <div>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Navratri</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Mahanirvan Din</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Ambedkar Jayanti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Ganesh Utsav</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm" className="table table-bordered">
        <thead>
          <tr>
            <th colSpan="6">Shiv Jayanti</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pending Applications</td>
            <td>Approved Applications</td>
            <td>Closed Applications</td>
            <td>Unclosed Applications</td>
            <td>Rejected Applications</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Dashboard;

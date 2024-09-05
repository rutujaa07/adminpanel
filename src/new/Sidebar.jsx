import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import {
  BsFillArchiveFill,
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsChevronDown,
  BsChevronUp
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, logout }) {
  const [isApplicationsDropdownOpen, setApplicationsDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleApplicationsDropdown = () => setApplicationsDropdownOpen(!isApplicationsDropdownOpen);
  const toggleReportsDropdown = () => setReportsDropdownOpen(!isReportsDropdownOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          AdminPanel
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>

        <li className='sidebar-list-item' onClick={toggleApplicationsDropdown}>
          <div>
            <BsFillArchiveFill className='icon' /> Applications
            {isApplicationsDropdownOpen ? <BsChevronUp className='dropdown-icon' /> : <BsChevronDown className='dropdown-icon' />}
          </div>
          {isApplicationsDropdownOpen && (
            <ul className='dropdown-menu'>
              <li className='dropdown'><Link to="/applications/approvedapplications">Approved Applications</Link></li>
              <li className='dropdown'><Link to="/applications/closedapplications">Closed Applications</Link></li>
              <li className='dropdown'><Link to="/applications/pendingapplications">Pending Applications</Link></li>
              <li className='dropdown'><Link to="/applications/rejectedapplications">Rejected Applications</Link></li>
              <li className='dropdown'><Link to="/applications/unclosedapplications">Unclosed Applications</Link></li>
            </ul>
          )}
        </li>

        <li className='sidebar-list-item'>
          <Link to="/generated-demands">
            <BsFillGrid3X3GapFill className='icon' /> Generated Demands
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/uploaded-permissions">
            <BsPeopleFill className='icon' /> Uploaded Permissions
          </Link>
        </li>

        <li className='sidebar-list-item' onClick={toggleReportsDropdown}>
          <div>
            <BsListCheck className='icon' /> Reports
            {isReportsDropdownOpen ? <BsChevronUp className='dropdown-icon' /> : <BsChevronDown className='dropdown-icon' />}
          </div>
          {isReportsDropdownOpen && (
            <ul className='dropdown-menu'>
              <li className='dropdown'><Link to="/reports/applicationstatusreport">ApplicationstatusReport</Link></li>
              <li className='dropdown'><Link to="/reports/collectionsummary">CollectionSummary</Link></li>
              <li className='dropdown'><Link to="/reports/demandchallan">DemandChallan</Link></li>
              <li className='dropdown'><Link to="/reports/divisionwisereport">DivisionwiseReport</Link></li>
              <li className='dropdown'><Link to="/reports/Gstcollections">GstCollections</Link></li>
            </ul>
          )}
        </li>

        <li className='sidebar-list-item'>
          <Link to="/murtikar-applications">
            <BsMenuButtonWideFill className='icon' /> Murtikar Applications
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <span onClick={handleLogout}>
            <BsFillGearFill className='icon' /> Logout
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

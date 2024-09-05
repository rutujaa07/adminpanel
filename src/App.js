import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './new/Header';
import Sidebar from './new/Sidebar';
import Home from './new/Home';
import Applications from './Pages/Applications';
import ApprovedApplications from './ApplicationsSubpages/ApprovedApplications'; 
import ClosedApplications from './ApplicationsSubpages/ClosedApplications'; 
import PendingApplications from './ApplicationsSubpages/PendingApplications'; 
import RejectedApplications from './ApplicationsSubpages/RejectedApplications'; 
import UnclosedApplications from './ApplicationsSubpages/UnclosedApplications'; 
import GeneratedDemands from './Pages/GeneratedDemands';
import UploadedPermissions from './Pages/UploadedPermissions';
import Reports from './Pages/Reports';
import ApplicationstatusReport from './ReportsSubpages/ApplicationstatusReport';
import CollectionSummary from './ReportsSubpages/CollectionSummary';
import DemandChallan from './ReportsSubpages/DemandChallan';
import DivisionwiseReport from './ReportsSubpages/DivisionwiseReports';
import GstCollections from './ReportsSubpages/GstCollections';
import MurtikarApplications from './Pages/MurtikarApplications';
import GenerateDemandsPage from './Pages/GenerateDemandsPage';
import UploadPermissionspage from './Pages/UploadPermissionspage';
import LoginPage from './new/LoginPage'; 
import Logout from './new/Logoutpage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className='grid-container'>
        {isAuthenticated && <Header OpenSidebar={OpenSidebar} />}
        {isAuthenticated && <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} logout={logout} />}
        <div className='main-container'>
          <Routes>
            <Route path="/login" element={<LoginPage login={login} />} />
            <Route path="/logout" element={<Logout logout={logout} />} />
            <Route path="/" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/applications" element={<ProtectedRoute element={<Applications />} />} />
            <Route path="/applications/approvedapplications" element={<ProtectedRoute element={<ApprovedApplications />} />} />
            <Route path="/applications/closedapplications" element={<ProtectedRoute element={<ClosedApplications />} />} />
            <Route path="/applications/pendingapplications" element={<ProtectedRoute element={<PendingApplications />} />} />
            <Route path="/applications/rejectedapplications" element={<ProtectedRoute element={<RejectedApplications />} />} />
            <Route path="/applications/unclosedapplications" element={<ProtectedRoute element={<UnclosedApplications />} />} />
            <Route path="/generated-demands" element={<ProtectedRoute element={<GeneratedDemands />} />} />
            <Route path="/uploaded-permissions" element={<ProtectedRoute element={<UploadedPermissions />} />} />
            <Route path="/reports" element={<ProtectedRoute element={<Reports />} />} />
            <Route path="/reports/applicationstatusreport" element={<ProtectedRoute element={<ApplicationstatusReport />} />} />
            <Route path="/reports/collectionsummary" element={<ProtectedRoute element={<CollectionSummary />} />} />
            <Route path="/reports/demandchallan" element={<ProtectedRoute element={<DemandChallan />} />} />
            <Route path="/reports/divisionwisereport" element={<ProtectedRoute element={<DivisionwiseReport />} />} />
            <Route path="/reports/Gstcollections" element={<ProtectedRoute element={<GstCollections />} />} />
            <Route path="/murtikar-applications" element={<ProtectedRoute element={<MurtikarApplications />} />} />
            <Route path="/generate-demands" element={<ProtectedRoute element={<GenerateDemandsPage />} />} />
            <Route path="/uploaded-permissions" element={<ProtectedRoute element={<UploadPermissionspage />} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

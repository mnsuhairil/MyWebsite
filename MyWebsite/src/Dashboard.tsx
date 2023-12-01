// Dashboard.tsx

import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Side Navigation */}
      <nav className="side-nav">
        <div className="company-name">My Website</div>
        <ul>
          <li><Link to="/Dashboard">Home</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/Journey">Journey</Link></li>
          <li><Link to="/MyLearning">MyLearning</Link></li>
        </ul>
      </nav>

      {/* Content */}
      <div className="dashboard-content">
        <h1>DASHBOARD PAGE</h1>
        {/* dashboard content here */}
      </div>
    </div>
  );
}

export default Dashboard;

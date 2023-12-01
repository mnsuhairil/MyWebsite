// Profile.tsx

import { Link } from 'react-router-dom'; 
import './nav.css'; //import styling
function Profile() {
  return (
    <div className="nav-container">
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
      <div className="nav-content">
        <h1>PROFILE PAGE</h1>
        {/* profile content here */}
      </div>
    </div>
  );
}

export default Profile;

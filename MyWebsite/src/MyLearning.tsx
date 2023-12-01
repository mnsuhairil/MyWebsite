// MyLearning.tsx

import { Link } from 'react-router-dom'; 
import './nav.css'; //import styling
import LearningContent from './LearningContent';

function MyLearning() {
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
        <h1>MyLearning Page</h1>
            {/* MyLearning content here */}
            <LearningContent /> {/* Render the LearningContent component */}
      </div>
    </div>
  );
}

export default MyLearning;

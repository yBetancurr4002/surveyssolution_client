import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) return null;

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <div className="sidebar bg-dark text-white p-3">
      <h4 className="text-white mb-4">Menu</h4>
      <ul className="nav flex-column">
        <li className={`nav-item ${isActive('/dashboard')}`}>
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className={`nav-item ${isActive('/surveys')}`}>
          <Link className="nav-link text-white" to="/surveys">Surveys</Link>
        </li>
        <li className={`nav-item ${isActive('/questions')}`}>
          <Link className="nav-link text-white" to="/questions">Questions</Link>
        </li>
        <li className={`nav-item ${isActive('/responses')}`}>
          <Link className="nav-link text-white" to="/responses">Responses</Link>
        </li>
        <li className={`nav-item ${isActive('/results')}`}>
          <Link className="nav-link text-white" to="/results">Results</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

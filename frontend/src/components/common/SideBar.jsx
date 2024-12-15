import React, { useContext } from 'react';
import { AuthContext } from "../backend/context/Auth";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); 
    toast.success('You have successfully logged out!');
  };

  return (
    <div className="card shadow border-0">
      <div className="card-body p-4 sidebar">
        <h4>Sidebar</h4>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><Link to="/admin/services">Services</Link></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">Projects</a></li>
          <li>
            <button onClick={handleLogout} className="btn btn-primary mt-4">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

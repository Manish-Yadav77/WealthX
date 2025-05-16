// components/PrivateRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('Please log in first.');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    alert('Access denied: Admins only.');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;

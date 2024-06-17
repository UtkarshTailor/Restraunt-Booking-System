import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast.success('Reservation successful!');
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success">
      <div className="success-container">
        <h1 className="success-title">Success</h1>
        <p className="success-message">
          Your reservation has been successfully made. You will be redirected to the home page shortly.
        </p>
      </div>
    </div>
  );
};

export default Success;

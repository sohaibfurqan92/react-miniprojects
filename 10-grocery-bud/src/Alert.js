import React from 'react';

const Alert = ({ alert }) => {
  const { msg, type } = alert;
  return (
    <div className={`alert alert-${type}`}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;

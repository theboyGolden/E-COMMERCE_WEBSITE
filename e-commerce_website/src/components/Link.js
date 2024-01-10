// LinkButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ to, children }) => {
  return (
    <Link to={to} className="cursor-pointer">
      {children}
    </Link>
  );
};

export default LinkButton;

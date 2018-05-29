import React from 'react';
import PropTypes from 'prop-types';

const CardLayout = ({ children, className }) => (
  <div className={className || 'pftp-card-layout'}>{children}</div>
);

CardLayout.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
};

export default CardLayout;

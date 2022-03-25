import React from 'react';
import PropTypes from 'prop-types';

const NationalitiesItem = ({ nationality }) => (
  <li>
    { nationality }
  </li>
);

NationalitiesItem.propTypes = {
  nationality: PropTypes.string.isRequired,
};

export default NationalitiesItem;

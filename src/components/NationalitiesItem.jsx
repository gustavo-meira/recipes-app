import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NationalitiesItem = ({ nationality }) => (
  <li>
    <Link to={ `/foods?nationality=${nationality}` }>
      { nationality }
    </Link>
  </li>
);

NationalitiesItem.propTypes = {
  nationality: PropTypes.string.isRequired,
};

export default NationalitiesItem;

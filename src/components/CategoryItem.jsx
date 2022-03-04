import React from 'react';
import PropTypes from 'prop-types';

const CategoryItem = ({ category }) => (
  <li>{ category }</li>
);

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const CategoryItem = ({ category }) => {
  const location = useLocation();
  const newUrl = `${location.pathname}?category=${category}`;

  return (
    <Link to={ newUrl }>
      <li>{ category }</li>
    </Link>
  );
};

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoryItem;

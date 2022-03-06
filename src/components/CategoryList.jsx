import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchCategories from '../api/fetchCategories';
import CategoryItem from './CategoryItem';

const CategoryList = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const type = location.pathname.includes('foods') ? 'meals' : 'drinks';

  useEffect(() => {
    fetchCategories(type)
      .then((data) => setCategories(data));
  }, [type]);

  return (
    <ul>
      <Link to={ location.pathname }>
        <li>All</li>
      </Link>
      {
        categories.map((category, index) => (
          <CategoryItem key={ index } category={ category.strCategory } />
        ))
      }
    </ul>
  );
};

export default CategoryList;

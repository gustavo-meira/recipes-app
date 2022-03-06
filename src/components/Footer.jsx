import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiMeal } from 'react-icons/gi';
import { ImCompass2 } from 'react-icons/im';
import { FaCocktail } from 'react-icons/fa';

const Footer = () => {
  const [currentActive, setCurrentActive] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('explore')) setCurrentActive('explore');
    else if (pathname.includes('foods')) setCurrentActive('foods');
    else if (pathname.includes('drinks')) setCurrentActive('drinks');
  }, [pathname]);

  const border = {
    border: '1px solid black',
  };

  return (
    <footer>
      <Link style={ currentActive === 'foods' ? border : {} } to="/foods">
        <GiMeal />
        Comidas
      </Link>
      <Link style={ currentActive === 'explore' ? border : {} } to="/explore">
        <ImCompass2 />
        Explorar
      </Link>
      <Link style={ currentActive === 'drinks' ? border : {} } to="/drinks">
        <FaCocktail />
        Bebidas
      </Link>
    </footer>
  );
};

export default Footer;

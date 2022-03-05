import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <Link to="/foods">
      Comidas
    </Link>
    <Link to="/explore">
      Explorar
    </Link>
    <Link to="/drinks">
      Bebidas
    </Link>
  </footer>
);

export default Footer;

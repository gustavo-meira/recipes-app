import React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { BsShareFill } from 'react-icons/bs';

const ButtonShareRecipe = ({ id, type }) => {
  const handleButtonShare = () => {
    if (id === '0') {
      copy(window.location.href);
    } else {
      copy(`${window.origin}/${type}/${id}`);
    }
  };


  return (
    <button type="button" onClick={ handleButtonShare }>
      <BsShareFill />
    </button>
  );
};

ButtonShareRecipe.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
};

ButtonShareRecipe.defaultProps = {
  id: '0',
  type: '',
};

export default ButtonShareRecipe;

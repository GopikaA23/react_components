import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
  const pilled = props.pilled
  const loading = props.loading
  const func = () => null
  return (
    <div className='btn' >
      <button
        className={`category ${pilled ? "pilled" : props.type}`}
        onClick={!loading ? props.onClick : func}
      >
        {loading ? props.loadingText : props.label}
      </button>
    </div>
  )
}
Button.defaultProps = {
  type: 'primary',
  label: 'Primary',
  pilled: false,
  loading: false,
  loadingText: 'submitting',
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  pilled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;
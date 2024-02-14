import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.css'
import { VscTriangleRight, VscTriangleDown } from "react-icons/vsc";


function Accordion(props) {
  const description = props.description
  const [showDescription, setShowDescription] = useState(false)

  const handleClick = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div className='Accordion-title'>
      <button className='Accordion-select' onClick={handleClick}>{showDescription ? <VscTriangleDown /> : <VscTriangleRight />}</button>
      {props.title}
      {showDescription && <div className='Accordion-description'>
        {description}
      </div>}
    </div>
  )

}

Accordion.defaultProps = {
  title: "What is Dog?",
  description: "A dog is a type of domesticated animal."
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Accordion; 
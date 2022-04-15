import React from 'react'

import PropTypes from 'prop-types';

const Btn = ({ color, text, onClick }) => {
  
     // const onClick = (e) => {
     // }

  return (
    <button onClick={onClick} style={{backgroundColor: color }} className="btn">{text}</button>
  )
}


Btn.defaultProps = {
 color: "#42FD00",
}

Btn.propTypes = {
     text: PropTypes.string,
     color: PropTypes.string,
     onClick: PropTypes.func,
}

export default Btn;
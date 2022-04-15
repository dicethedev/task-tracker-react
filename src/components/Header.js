// rafce
import React from 'react'
//impt
import PropTypes from 'prop-types';
import Button from './Btn'

//pass a props inside the function like this (props) or like this ({ title })
const Header = ({ title, onAdd, showAdd }) => {

     // const onClick = () => {
     //      console.log('click')
     // }

  return (
    <header className="header">
        <h1>{title}</h1>
        {/* //props in pass inside the button i.e color, text, onClick */}
        {/* onClick={onClick}  pass before this now onClick={onAdd}  */}
        {/* text='Add' is pass before. but now is text={showAdd ? 'Close' : 'Add'}*/}
        {/* color='#42FD00' is pass before. but now is color={}  */}
         <Button color={showAdd ? 'red' : 'green' } text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

//set the props to default props
Header.defaultProps = {
     title : 'Task Tracker'
}

Header.propTypes = {
     title: PropTypes.string.isRequired,
}

// CSS IN JAVASCRIPT
// const headingStyle = {
//      color: 'red',
//      background: 'Black',
// }

export default Header
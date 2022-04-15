
import { FaTimes } from 'react-icons/fa'
import React from 'react'


//catching the props that is pass in Tasks.js
const Task = ({ task, onDelete, onToggle }) => {
  return (

     // if task reminder is true then we are going to have the class of reminder else is going be nothing to show
    <div className={`task ${task.reminder ? 'reminder' : '' } `} onDoubleClick={() => onToggle(task.id)}>
      {/* text is coming from App.js */}
     <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} 
         onClick={() => onDelete(task.id)} /> 
     </h3>
     <p>{task.day}</p>
    </div>
  )
}

export default Task

// I install this 'npm install react-icons'
import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
     //useState returns a stateful value and a function to update it
       const [text, setText] = useState('')
       const [day, setDay] = useState('')
       const [reminder, setReminder] = useState(false)

       //onSubmit Function
      const onSubmit = (e) => {
         e.preventDefault();
         
         //Added a validation for the boxes
         if(!text) {
           alert('Please add a task')
           return
         }
         //pass this to onAdd event
         onAdd({ text, day, reminder })


         //Clear the form
         setText('')
         setDay('')
         setReminder(false)
      }

  return (
     // The HTML Mockup was fixed first before adding the submit event
     <form className="add-form" onSubmit={onSubmit}>
          {/* 1 */}
      <div className="form-control">
         <label>Task</label>
         {/* implement the useState define above inside this functions */}
         <input type="text" placeholder="Add Task" value={text} 
         onChange={(e) => setText(e.target.value)}  />
       </div>

          {/* 2 */}
       <div className="form-control">
         <label>Day & Time</label>
         <input type="text" placeholder="Day & Time" value={day} 
         onChange={(e) => setDay(e.target.value)}  />
       </div>

        {/* 3 */}
       <div className="form-control form-control-check">
         <label>Set Reminder</label>
         {/* since this place is a checkbox I change the target to currentTarget.checked */}
         {/* checked the checkbox to be true or false */}
         <input type='checkbox' value={reminder} checked={reminder}
         onChange={(e) => setReminder(e.currentTarget.checked)}  />
       </div>

       <input type="submit" value="Save Task" className="btn btn-block" />
     </form>
  )
}

export default AddTask

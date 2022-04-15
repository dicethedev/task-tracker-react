
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
     // making use of the usestate (ReactHook) inside this function
     // const [tasks, setTasks] = useState ([
     //      {
     //           id: 1,
     //           text: 'Doctor Appointment',
     //           day: 'March 22nd at 2:40am',
     //           reminder: true,
     //      },
     //      {
     //           id: 2,
     //           text: 'Coding at Coffee Shop',
     //           day: 'March 23rd at 4:40pm',
     //           reminder: true,
     //      },
     //      {
     //           id: 3,
     //           text: 'Dinner with Friends',
     //           day: 'March 24th at 10:00pm',
     //           reminder: false,
     //      },
     // ])

  return (
       //setTasks is use here if you want to add a new tasks
     //   setTasks([...tasks, {}])
    <>
     {tasks.map((task) => (
          // pass onDelete props here and I forward it back to Task.js
         <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
     ))}
    </>
  )
}

export default Tasks

//map() take in a function

// place tasks into an array of objects
// const tasks = [
//      {
//           id: 1,
//           text: 'Doctor Appointment',
//           day: 'March 22nd at 2:40am',
//           reminder: true,
//      },
//      {
//           id: 2,
//           text: 'Coding at Coffee Shop',
//           day: 'March 23rd at 4:40pm',
//           reminder: true,
//      },
//      {
//           id: 3,
//           text: 'Dinner with Friends',
//           day: 'March 24th at 10:00pm',
//           reminder: false,
//      }
// ]

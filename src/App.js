// useEffect is pass to use for the backend server -- db.json
import { useState, useEffect } from 'react'
//React router is here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {

  //The Add Button Function State and I pass a boolean in it
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState ([
    // {
    //      id: 1,
    //      text: 'School Lecture Classes',
    //      day: 'March 22nd at 2:40am',
    //      reminder: true,
    // },
    // {
    //      id: 2,
    //      text: 'Coding at Coffee Shop',
    //      day: 'March 23rd at 4:40pm',
    //      reminder: true,
    // },
    // {
    //      id: 3,
    //      text: 'Dinner with Friends',
    //      day: 'March 24th at 10:00pm',
    //      reminder: false,
    // },
])

    //For the Backend Services i.e json.server
    useEffect(()=> {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }

      getTasks()
      //went down to delete function to able to delete the information on the UI
    }, [])

    // Fetch Data
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      // console.log(data)
      return data
    }

     // Fetch Data for Task UI
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      // console.log(data)
      return data
    }


//Delete Task function 
//  const deleteTask = (id) => { is declared before.
// but now it is declared like this 'const deleteTask = async (id) => {' because of the backend functionality
   const deleteTask = async (id) => {
    // For the backend services
    await  fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

      // console.log('delete', id)
      setTasks(tasks.filter((task) => task.id !== id ))
   }

// Toggle Reminder
// declare this before - (  const toggleReminder =  (id) => {) 
// but now it is declared (  const toggleReminder = async (id) => {)
//For the backend service - json-server
  const toggleReminder = async (id) => {
   const taskToToggle = await fetchTask(id)
   const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
     method: 'PUT',
     headers: {
       'Content-type': 'application/json'
     },
     body: JSON.stringify(updateTask)
   })

     const data = await res.json()

    setTasks(
      tasks.map((task) =>
       task.id  === id ? {...task, reminder:
         data.reminder } : task
       )
       )

   // console.log(id)
    // setTasks(tasks.map((task) => task.id  === id 
    // ? {...task, reminder: !task.reminder } : task))
  }


// Add Task
    const addTask = async (task) => {

    //for backend services
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    //setTasks is the entire array
    setTasks([...tasks, data])

       //  console.log(task);
    //   const id = Math.floor(Math.random() * 10000) + 1
    //   //this will print new tasks on the screen with this line of code
    //   const newTask = {id, ...task}
    //   setTasks([...tasks, newTask])
    //  }

    }

   return (

    <Router>
    {/* className represent a normal class */}
    <div className="container">
      {/* <Header />*/}
      {/* a props is pass here to make the add function effect */}
      {/* showAdd props is pass here and I forward it back to Header.js to make it functional */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {/* pass a prop inside this component onAdd and I forward the props back to AddTask.js */}
      {/* <AddTask onAdd={addTask} /> */}
      {/* adding the useState of showAddTask to hide the component for this area */}
      {/* I head back to Header component to pass an event because that is where the add button is found */}
      {showAddTask && <AddTask onAdd={addTask} />}


      {/* props is pass here and I forward onDelete props back to Tasks.js and toggleReminder */}
      {/* <Tasks tasks={tasks} onDelete={deleteTask} /> */}
        {/* showing the message when you delete the filter */}
      {tasks.length > 0 ? (
         <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
          'No Tasks To Display'
          )}
          <Routes>
            <Route path="/about" element={<About />}>           
            </Route>
            </Routes>
          <Footer />
    </div>
    </Router>
  );
}
export default App;

    // You can note this -- not actually important 
// you can remove the div className and just input empty <>

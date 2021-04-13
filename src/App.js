import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { getDefaultNormalizer } from '@testing-library/dom'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {  
    getTasks()
    
  }, [])
  
  const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:4000/api/task')
    const data = await res.json()
    
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/api/task/${id}`)
    const data = await res.json()
    
    return data
  }
  
  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:4000/api/task', { 
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    getTasks()
  }

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/api/task/${id}`, {
      method: 'DELETE'
    })

    getTasks()
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    console.log(id)
    const res = await fetch(`http://localhost:4000/api/task/reminder/${id}`, {
      method: "PUT",
      headers: {
        'Content-type' : 'application/json'
      },
    })

   getTasks()

  }

  const toggleComplete = async (id) => {
    const res = await fetch(`http://localhost:4000/api/task/complete_task/${id}`, {
      method: "PUT",
      headers: {
        'Content-type' : 'application/json'
      },
      assigns: "Teste"
    })

   getTasks()

  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} buttonText={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>} 


        <Route path='/' exact render={(props) => (
          <>
            <Tasks tasks={tasks.data} onDelete={deleteTask} onToggle={toggleReminder} onToggleComplete={toggleComplete}/> 
          </>
        )}/>
        <Route path='/about' component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}


/* class App extends React.Component {
  render() {
    return <h1>Hello from a class<h1>
  }
}*/


export default App;

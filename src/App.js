import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

/* Generate a new task ID */

let idAccumulator = 0;
const generateId = () => {
  return idAccumulator += 1;
};

function App() {

  /* Add new tasks */

  const [tasks, setTasks] = useState([]);
  const addTask = (content, state) => {

    /* Task structure */
    
    const newTask = {
      id: generateId(),
      content,
      state
    };

    /* Add existing tasks to the task list */
    
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className='workflow'>
          <TaskList title={`No Status`} onAddTask={addTask} tasks={tasks} />
          <TaskList title={`Backlog`} onAddTask={addTask} tasks={tasks} />
          <TaskList title={`In Progress`} onAddTask={addTask} tasks={tasks} />
          <TaskList title={`Code Review`} onAddTask={addTask} tasks={tasks} />
          <TaskList title={`Test`} onAddTask={addTask} tasks={tasks} />
          <TaskList title={`Done`} onAddTask={addTask} tasks={tasks} />
        </div>
      </main>
    </div>
  );
}

export default App;

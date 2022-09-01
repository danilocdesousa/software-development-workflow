import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

/* Generate a new task ID */

let idAccumulator = 0;
const generateId = () => {
  return idAccumulator += 1;
};

/* End */

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

    /* End */

    /* Add existing tasks to the task list */

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });

    /* End */

  };

  /* Update the task according to the arguments */

  const updateTasks = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  /* End */

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <div className='workflow'>
          <TaskList title={`No Status`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
          <TaskList title={`Backlog`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
          <TaskList title={`In Progress`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
          <TaskList title={`Code Review`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
          <TaskList title={`Test`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
          <TaskList title={`Done`} onAddTask={addTask} tasks={tasks} onTaskUpdate={updateTasks} />
        </div>
      </main>
    </div>
  );

  /* End */

}

export default App;

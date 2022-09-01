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
          <TaskList
            title={`No Status`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "No Status")}
            onTaskUpdate={updateTasks} taskState="No Status" />
          <TaskList
            title={`Backlog`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Backlog")}
            onTaskUpdate={updateTasks} taskState="Backlog" />
          <TaskList
            title={`In Progress`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "In Progress")}
            onTaskUpdate={updateTasks} taskState="In Progress" />
          <TaskList
            title={`Code Review`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Code Review")}
            onTaskUpdate={updateTasks} taskState="Code Review" />
          <TaskList
            title={`Test`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Test")}
            onTaskUpdate={updateTasks} taskState="Test" />
          <TaskList
            title={`Done`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Done")}
            onTaskUpdate={updateTasks} taskState="Done" />
        </div>
      </main>
    </div>
  );

  /* End */

}

export default App;

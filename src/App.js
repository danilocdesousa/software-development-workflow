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

  /* Remove task from the list */

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
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
            onTaskUpdate={updateTasks} taskState="No Status" onDeleteTask={deleteTask} />
          <TaskList
            title={`Backlog`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Backlog")}
            onTaskUpdate={updateTasks} taskState="Backlog" onDeleteTask={deleteTask} />
          <TaskList
            title={`In Progress`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "In Progress")}
            onTaskUpdate={updateTasks} taskState="In Progress" onDeleteTask={deleteTask} />
          <TaskList
            title={`Code Review`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Code Review")}
            onTaskUpdate={updateTasks} taskState="Code Review" onDeleteTask={deleteTask} />
          <TaskList
            title={`Test`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Test")}
            onTaskUpdate={updateTasks} taskState="Test" onDeleteTask={deleteTask} />
          <TaskList
            title={`Done`}
            onAddTask={addTask}
            tasks={tasks.filter((task) => task.state === "Done")}
            onTaskUpdate={updateTasks} taskState="Done" onDeleteTask={deleteTask} />
        </div>
      </main>
    </div>
  );

  /* End */

}

export default App;

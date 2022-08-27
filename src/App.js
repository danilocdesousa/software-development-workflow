import './App.css';
import Navbar from './components/Navbar/Navbar';
import TaskList from './components/TaskList/TaskList';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <main>
        <div>
          <TaskList title="No Status" />
          <TaskList title="Backlog" />
          <TaskList title="In Progress" />
          <TaskList title="Done" />
        </div>
      </main>
    </div>
  );
}

export default App;

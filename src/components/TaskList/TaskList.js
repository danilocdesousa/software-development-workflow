import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title, onAddTask, tasks, onTaskUpdate, taskState, onDeleteTask }) {

    /* Call the onAddTask with arguments */

    const addTask = () => {
        return onAddTask("New task", taskState);
    };

    /* End */

    return (
        <div className="task-list">
            <div className="task-list-title">{title}</div>
            <div className="task-list-content">
                {tasks.map((task) => {
                    return <TaskItem key={task.id} id={task.id}
                        content={task.content} taskState={task.state} onTaskUpdate={onTaskUpdate} onDeleteTask={onDeleteTask} />
                })}
            </div>
            <div>
                <button className="plus-button" onClick={addTask}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                    New</button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};

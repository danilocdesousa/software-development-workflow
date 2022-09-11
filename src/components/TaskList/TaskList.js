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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>New</button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
};

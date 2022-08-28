import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";

export default function TaskList({ title, onAddTask, tasks }) {

    /* Call the onAddTask with arguments */

    const addTask = () => {
        return onAddTask("New task", "pending");
    };

    return (
        <div className="task-list">
            <div className="task-list-title">{title}</div>
            <div className="task-list-content">
                {tasks.map((task) => {
                    return <div key={task.id}>{task.content}</div>;
                })}
            </div>
            <div>
                <button onClick={addTask}>Add item</button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired, 
    tasks: PropTypes.array.isRequired
};

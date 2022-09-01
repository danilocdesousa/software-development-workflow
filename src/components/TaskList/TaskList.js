import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title, onAddTask, tasks, onTaskUpdate, taskState }) {

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
                        content={task.content} taskState={task.state} onTaskUpdate={onTaskUpdate} />
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

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tasklist.css";

export default function TaskList({ title }) {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((currentCount) => {
            return currentCount + 1;
        })
    };
    return (
        <div className="task-list task-list-column">
            <div className="task-list-title">{title}</div>
            <div className="task-list-content">
                <div>{count}</div>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
};

import React from "react";
import "./tasklist.css";

export default function TaskList({ title }) {
    return (
        <div className="task-list">
            <div className="task-list-title">{title}</div>
            <div className="task-list-content">Content</div>
        </div>
    );
}

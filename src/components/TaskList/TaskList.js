import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";

export default function TaskList({ title }) {
    return (
        <div className="task-list">
            <div className="task-list-title">{title}</div>
            <div className="task-list-content">Content</div>
        </div>
    );
}

TaskList.propTypes = {
    title: PropTypes.string.isRequired
};

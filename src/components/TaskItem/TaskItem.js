import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskItem({ id, content, taskState, onTaskUpdate }) {

    /* Show or edit the task */

    const [isEditing, setIsEditing] = useState(false);
    const [editableTitle, setEditableTitle] = useState(content);
    const onTitleChange = (e) => {

        /* Gets input value */

        const newTitle = e.target.value;
        setEditableTitle(newTitle);

        /* End */

        onTaskUpdate(id, newTitle, taskState);
    };

    const keyDown = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);
        }
    };

    /* Connect the select to the task state */

    const onTaskStateChange = (e) => {
        onTaskUpdate(id, content, e.target.value)
    };

    /* End */

    if (isEditing) {
        return <input
            type={`text`}
            value={editableTitle}
            onChange={onTitleChange}
            onKeyDown={keyDown} />
    } else {
        return (
            <div>
                <div onClick={(e) => { return setIsEditing(true) }}>{editableTitle}</div>
                <select onChange={onTaskStateChange} value={taskState}>
                    <option value="No Status">No Status</option>
                    <option value="Backlog">Backlog</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Code Review">Code Review</option>
                    <option value="Test">Test</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        );
    }
    /* End */
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}

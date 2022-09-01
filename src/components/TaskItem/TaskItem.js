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

    if (isEditing) {
        return <input type={`text`} value={editableTitle} onChange={onTitleChange} onKeyDown={keyDown} />
    } else {
        return <div onClick={(e) => { return setIsEditing(true) }}>{editableTitle}</div>
    }
    /* End */
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}

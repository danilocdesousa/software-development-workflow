import React from "react";
import PropTypes from "prop-types";

export default function TaskItem({ id, content, taskState }) {
    return <div>{content}</div>
}

TaskItem.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    taskState: PropTypes.string.isRequired
}

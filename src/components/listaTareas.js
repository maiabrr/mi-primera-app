import React from 'react';

function TaskList() {
    const tasks = [
    "Lear React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
    ];

    return (
    <div>
        <h2>Thing i need to do:</h2>
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>{task}</li>
            ))}
        </ul>
        </div>
    );
}

export default TaskList;
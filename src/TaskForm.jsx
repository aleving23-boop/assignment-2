import { useState } from 'react';

const TaskForm = ({ taskArray, setTaskArray }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [nextTaskId, setNextTaskId] = useState(taskArray.length + 1);

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (!taskName && !taskDescription) {
            alert('Please enter a task name and a description');
            return;
        };
        if (!taskName) {
            alert('Please enter a task name');
            return;
        };
        if (!taskDescription) {
            alert('Please enter a description of the task');
            return;
        };
        if (taskName && taskDescription) {
            let newTask = {id: nextTaskId, task: taskName, description: taskDescription};
            setTaskArray(prevTaskList => [...prevTaskList, newTask]);
            setNextTaskId(nextTaskId + 1);
            setTaskName('');
            setTaskDescription('');
        };
    };

    return (
        <div>
            <h3>Add Task Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task Name: </label>
                <input
                    type="text"
                    id="task"
                    placeholder="Task Name..."
                    value={taskName}
                    onChange={(event) => {setTaskName(event.target.value)}}
                />
                <br/><br/>
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    id="description"
                    placeholder="description..."
                    value={taskDescription}
                    onChange={(event) => {setTaskDescription(event.target.value)}}
                />
                <br/><br/>
                <button type="submit" id="submitTask">Add Task</button>
            </form>
        </div>
    )
};

export default TaskForm;
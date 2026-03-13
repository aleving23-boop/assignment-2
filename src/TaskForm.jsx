import { useState } from 'react';

const TaskForm = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (event) => { 
        event.preventDefault();
        console.log(task);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="submitTask">Enter Task Name: </label>
                <input
                    type="text"
                    id="submitTask"
                    placeholder="Type Here..."
                    value={task}
                    onChange={(event) => {setTask(event.target.value)}}
                />
                <button type="submit" id="submitTask">Add Task</button>
            </form>
        </div>
    )
};

export default TaskForm;
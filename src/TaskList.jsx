import { useState } from 'react';
import TaskForm from './TaskForm';

const TaskList = ({ deleteTask }) => {
    const [taskArray, setTaskArray] = useState([
        {id: 1, task: 'work', description: "Work for 3 hours"},
        {id: 2, task: 'school', description: "Study in the library"},
        {id: 3, task: 'swimming', description: "Practice at health club"}, 
        {id: 4, task: 'track', description: "Run at high school"},
        {id: 5, task: 'bowling', description: "Bowl at bowling alley"}
    ]);

    const [searchTask, setSearchTask] = useState('');

    const sortByName = () => {
        let sortedTaskArray = [...taskArray].sort(
            (a, b) => a.task.toLowerCase().localeCompare(b.task.toLowerCase())
        );
        setTaskArray(sortedTaskArray);
    };

    const sortByNumber = () => {
        let sortedTaskArray = [...taskArray].sort((a, b) => a.id - b.id);
        setTaskArray(sortedTaskArray);
    };

    const filteredTaskArray = searchTask === '' ? taskArray
        : taskArray.filter(
            task => ((task.task).toLowerCase()).includes(searchTask.toLowerCase())
        );

    function taskArrayHtml(array) {
        if (array.length > 0) {
            const htmlArray = array.map(
            task => <li key={task.id}>
                Task {task.id}: {task.task} - {task.description}
                <button id={task.id} onClick={(event) => {
                    let buttonId = event.target.id;
                    let deleteConfirmed = window.confirm(`Delete Task #${buttonId}?`);
                    if (deleteConfirmed) {
                        setTaskArray(deleteTask(buttonId, taskArray));
                    };
                }}>
                    Delete
                </button>
            </li>);
        return htmlArray;
        } else {
            return <p>There are no tasks in your list</p>;
        }
    }; 

  return (
    <div>
        <h3>Task List</h3>
        <form>
            <label htmlFor="searchTasks">Search Tasks: </label>
            <input
                type="text"
                id="searchTasks"
                placeholder="Type here..."
                value={searchTask}
                onChange={(event) => setSearchTask(event.target.value)}
            />
        </form>
        <ul>{taskArrayHtml(filteredTaskArray)}</ul>
        <br/>
        <button onClick={sortByName}>sort by name</button>
        <button onClick={sortByNumber}>sort by number</button>
        <br/>
        <TaskForm taskArray={taskArray} setTaskArray={setTaskArray} />
    </div>
  )
};

export default TaskList;
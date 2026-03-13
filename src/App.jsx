import './App.css';
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import RandomTask from './RandomTask';
import Counter from './Counter';
import TaskForm from './TaskForm';

const taskArray = [
  {id: 1, task: 'work'},
  {id: 2, task: 'school'},
  {id: 3, task: 'swimming'},
  {id: 4, task: 'track'},
  {id: 5, task: 'bowling'}
];

function taskArrayHtml(array) {
  return array.map(task => <li key={task.id}>Task {task.id}: {task.task}</li>);
}; 

function handleAlert() {
  alert("Alert!");
};

const handleClick = () => {
  handleAlert();
};

function App() {

  return (
    <div>
      <Greeting username={'Bob'} />
      <Greeting username={'Alice'} />
      <UserInfo handleClick={handleClick} />
      <RandomTask />
      <Counter />
      <ul>{taskArrayHtml(taskArray)}</ul>
      <TaskForm />
    </div>
  )
}

export default App

import './App.css';
import Greeting from './Greeting';
import UserInfo from './UserInfo';
import RandomTask from './RandomTask';
import Counter from './Counter';
import TaskList from './TaskList';

function handleAlert() {
  alert("Alert!");
};

const handleClick = () => {
  handleAlert();
};

const deleteTask = (buttonId, array) => {
        const newArray = array.filter(item => item.id != buttonId);
        return newArray; 
};

function App() {

  return (
    <div>
      <Greeting username={'Bob'} />
      <Greeting username={'Alice'} />
      <UserInfo handleClick={handleClick} />
      <RandomTask />
      <Counter />
      <TaskList deleteTask={deleteTask} />
    </div>
  )
}

export default App

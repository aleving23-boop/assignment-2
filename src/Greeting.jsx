import { useState } from 'react';

const Greeting = ({ username }) => {
  const date = new Date();
  const dayNumber = date.getDay();
  const currentDay = (dayNumber == 1) ? "Monday"
    : (dayNumber == 2) ? "Tuesday"
    : (dayNumber == 3) ? "Wednesday"
    : (dayNumber == 4) ? "Thursday"
    : (dayNumber == 5) ? "Friday"
    : (dayNumber == 6) ? "Saturday"
    : "Sunday";
  const [greetingType, setGreetingType] = useState("Hello");
  const changeGreetingType = () => {
    if (greetingType === 'Hello') {
      setGreetingType('Goodbye');
    } else {
      setGreetingType('Hello');
    };
  };

  return (
    <div>
      <h1>{greetingType} {username}!</h1>
      <p style={{color: 'blue'}}>Today is {currentDay}</p>
      <button onClick={changeGreetingType}>Change Greeting</button>
    </div>
  )
}

export default Greeting
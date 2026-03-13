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
  return (
    <div>
      <h1>Hello {username}!</h1>
      <p style={{color: 'blue'}}>Today is {currentDay}</p>
    </div>
  )
}

export default Greeting
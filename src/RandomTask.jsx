const RandomTask = () => {
  const tasks = ['work', 'chores', 'code'];
  function getRandomTask(array) {
    let i = Math.floor(Math.random() * array.length);
    return array[i];
  }
  return (
    <h3>Random Task: {getRandomTask(tasks)}</h3>
  )
}

export default RandomTask
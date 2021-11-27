const dataLocation = './tasks.json'

const fetchTasks = () => fetch(dataLocation)
  .then(res => res.json())

export default fetchTasks;
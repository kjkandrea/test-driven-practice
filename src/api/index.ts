import { Task } from '../types/task';

const dataLocation = './tasks.json'

export const fetchTasks = (): Promise<Task[]> => fetch(dataLocation)
  .then(res => res.json())
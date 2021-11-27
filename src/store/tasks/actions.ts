import {
  fetchTasks,
} from '../../api';
import { Task } from '../../types/task';
import { Dispatch } from 'redux';

export function setTasks(tasks: Task[]) {
  return {
    type: 'setTasks',
    payload: {
      tasks,
    },
  };
}

export function loadTasks() {
  return async (dispatch: Dispatch) => {
    const tasks = await fetchTasks();
    dispatch(setTasks(tasks.slice(0, 10)));
  };
}

import { Action, AnyAction } from 'redux';
import { ReducerAction } from 'react';
import { Task } from '../types/task';

const initialState = {
  tasks: [],
};

interface IAction {
  type: 'setTasks'|'deleteTask',
  payload: {
    tasks: Task[],
    id: number
  }
}

export default function reducer(state: { tasks: Task[] } = initialState, action: IAction) {
  if (action.type === 'setTasks') {
    const { tasks } = action.payload;
    return {
      ...state,
      tasks,
    };
  }

  if (action.type === 'deleteTask') {
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.payload.id)
    }
  }

  return state;
}

export type RootState = ReturnType<typeof reducer>;

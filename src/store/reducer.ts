import { Action, AnyAction } from 'redux';
import { ReducerAction } from 'react';
import { Task } from '../types/task';

const initialState = {
  tasks: [],
};

interface IAction {
  type: 'setTasks',
  payload: {
    tasks: Task[]
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

  return state;
}

export type RootState = ReturnType<typeof reducer>;

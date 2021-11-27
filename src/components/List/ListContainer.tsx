import React from 'react';
import List from './List';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

import {
  deleteTask
} from '../../store/actions'

const ListContainer = () => {
  const dispatch = useDispatch()

  const { tasks } = useSelector((state: RootState) => ({
    tasks: state.tasks
  }))

  function handleClick(id: number) {
    dispatch(deleteTask(id))
  }

  return (
    <List tasks={tasks} onClick={handleClick} />
  );
};

export default ListContainer;
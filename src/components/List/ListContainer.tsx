import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

const ListContainer = () => {
  const { tasks } = useSelector((state: RootState) => ({
    tasks: state.tasks
  }))

  return (
    <List tasks={tasks} />
  );
};

export default ListContainer;
import React from 'react';
import { Task } from '../../types/task';

interface ListProps {
  tasks: Task[]
}

const List: React.FC<ListProps> = ({ tasks }) => {
  if (tasks.length < 1) {
    return <p>Dobby is free.</p>
  }

  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  );
};

export default List;

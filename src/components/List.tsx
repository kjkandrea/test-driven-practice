import React from 'react';
import { Task } from '../types/todo';

interface ListProps {
  tasks: Task[]
}

const List: React.FC<ListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.title}</li>)}
    </ul>
  );
};

export default List;

import React from 'react';
import { Task } from '../../types/task';

interface ListProps {
  tasks: Task[],
  onClick: Function
}

const List: React.FC<ListProps> = ({ tasks, onClick }) => {
  if (tasks.length < 1) {
    return <p>Dobby is free.</p>
  }

  return (
    <ul>
      {tasks.map(task =>
        <li key={task.id}>
          {task.title}
          <button onClick={() => onClick()}>완료</button>
        </li>
      )}
    </ul>
  );
};

export default List;

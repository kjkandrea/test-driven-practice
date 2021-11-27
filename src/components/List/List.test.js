import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import List from './List';
import tasks from '../../../fixtures/tasks';

describe('List', () => {
  // 테스트가 주어지는 상황
  context('with tasks', () => {
    it('render tasks', () => {
      const { container } = render(
        (<List tasks={tasks} />),
      );

      expect(container).toHaveTextContent('Where the hell my homies went?')
      expect(container).toHaveTextContent('Looking around like where my phone?')
    });

    it('render "완료" button to delete a task', () => {
      const handleClick = jest.fn()

      const { getAllByText } = render(
        (<List tasks={tasks} />),
      );

      const buttons = getAllByText('완료')

      fireEvent.click(buttons[0])

      expect(handleClick).toBeCalled()
    });
  })

  // 테스크가 주어지지 않는 상황
  context('without tasks', () => {
    it('render no task message', () => {
      const { container } = render(
        (<List tasks={[]} />),
      );

      expect(container).toHaveTextContent('Dobby is free.')
    });
  })
});
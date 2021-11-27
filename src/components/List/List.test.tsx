import { render } from '@testing-library/react';
import React from 'react'
import List from './List';

const tasks = [
  { id: 1, title: 'Where the hell my homies went?' },
  { id: 2, title: 'Looking around like where my phone?' },
];

describe('List', () => {
  it('render tasks', () => {
    const { container } = render(
      (<List tasks={tasks} />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
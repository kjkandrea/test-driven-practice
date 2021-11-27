import { render } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom/extend-expect';

import List from './List';
import { tasks } from '../../store/task';

describe('List', () => {
  it('render tasks', () => {
    const { container } = render(
      (<List tasks={tasks} />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
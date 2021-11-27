import { render } from '@testing-library/react';
import React from 'react'
import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import tasks from '../../../fixtures/tasks';

jest.mock('react-redux')

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks
  }))

  it('render tasks', () => {
    const { container } = render(
      (<ListContainer />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
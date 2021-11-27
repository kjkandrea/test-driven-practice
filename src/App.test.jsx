import { render } from '@testing-library/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import tasks from '../fixtures/tasks';
import App from './App';

jest.mock('react-redux')

describe('App', () => {
  const dispatch = jest.fn()

  useDispatch.mockImplementation(() => dispatch)

  useSelector.mockImplementation((selector) => selector({
    tasks
  }))

  it('render tasks', () => {
    const { container } = render(
      (<App />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
import { render, fireEvent } from '@testing-library/react';
import React from 'react'
import { useSelector } from 'react-redux';
import ListContainer from './ListContainer';
import tasks from '../../../fixtures/tasks';
import { useDispatch } from '../../../__mocks__/react-redux';

jest.mock('react-redux')

describe('ListContainer', () => {
  useDispatch.mockImplementation(() => dispatch)

  useSelector.mockImplementation((selector) => selector({
    tasks
  }))

  it('render tasks', () => {
    const { container, getAllByText } = render(
      (<ListContainer />),
    );

    const buttons = getAllByText('완료')

    fireEvent.click(buttons[0])

    expect(dispatch).toBeCalled()

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
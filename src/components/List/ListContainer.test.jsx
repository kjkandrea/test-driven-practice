import { render } from '@testing-library/react';
import React from 'react'
import ListContainer from './ListContainer';
import { useSelector } from 'react-redux';

jest.mock('react-redux')

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Where the hell my homies went?' },
      { id: 2, title: 'Looking around like where my phone?' },
    ]
  }))

  it('render tasks', () => {
    const { container } = render(
      (<ListContainer />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
    expect(container).toHaveTextContent('Looking around like where my phone?')
  });
});
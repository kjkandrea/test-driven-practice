import { render } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom/extend-expect';

import List from './components/List';

describe('List', () => {
  it('render tasks', () => {
    const { container } = render(
      (<List />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
  });
});
import { render } from '@testing-library/react';
import React from 'react'
import '@testing-library/jest-dom/extend-expect';

import App from './App';

describe('App', () => {
  it('render tasks', () => {
    const { container } = render(
      (<App />),
    );

    expect(container).toHaveTextContent('Where the hell my homies went?')
  });
});
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm></ContactForm>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('inserts text into heading', () => {
    const { getByTestId } = render(<ContactForm></ContactForm>);

    expect(getByTestId('heading')).toHaveTextContent('Contact me');
  })
})

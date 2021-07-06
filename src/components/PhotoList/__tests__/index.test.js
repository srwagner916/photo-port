import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('PhotoList component', () => {
  it('renders', () => {
    render(<PhotoList />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<PhotoList />);
    
    expect(asFragment()).toMatchSnapshot();
  })
})
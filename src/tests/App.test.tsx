import React from 'react';
import { render,  screen, fireEvent } from '@testing-library/react';
//import { toBeInTheDocument } from '@testing-library/jest-dom';
import Nav from '../components/Nav';

const props = jest.fn()

describe('Nav', ()=>{
  test('renders App component', () => {
    render(<Nav />)
    screen.debug()
  })
})

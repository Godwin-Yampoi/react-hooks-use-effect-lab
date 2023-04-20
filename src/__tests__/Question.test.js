import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from './_tests_/Question';

describe('Question component', () => {
  test('renders question text', () => {
    render(<Question text="What is your name?" />);
    const questionText = screen.getByText(/What is your name?/i);
    expect(questionText).toBeInTheDocument();
  });
});


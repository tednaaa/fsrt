import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RootPage } from './RootPage';

describe('Root page', () => {
  it('should correctly render the root page', () => {
    render(<RootPage />);

    const title = screen.getByLabelText('Page title');
    const nameInput = screen.getByLabelText('Name input');
    const button = screen.getByLabelText('button');

    expect(title).toBeTruthy();
    expect(nameInput).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('should correctly update values of button and input after button click', () => {
    const MOCK_TEXT = 'text';

    render(<RootPage />);

    const nameInput = screen.getByLabelText('Name input') as HTMLInputElement;
    const button = screen.getByLabelText('button') as HTMLButtonElement;

    fireEvent.change(nameInput, { target: { value: MOCK_TEXT } });
    fireEvent.click(button);

    expect(button.textContent).toBe(`${MOCK_TEXT} :)`);
    expect(nameInput.value).toBe('Hi');
  });

  it('should not call callback after button click if input value is empty', () => {
    const MOCK_TEXT = 'text';
    const MOCK_EMPTY_TEXT = '';
    const MOCK_EMPTY_TEXT_WITH_SPACE = ' ';
    render(<RootPage />);

    const nameInput = screen.getByLabelText('Name input') as HTMLInputElement;
    const button = screen.getByLabelText('button') as HTMLButtonElement;

    fireEvent.change(button, { textContent: MOCK_TEXT });
    fireEvent.change(nameInput, { target: { value: MOCK_EMPTY_TEXT } });
    fireEvent.click(button);

    expect(button.textContent.replace(' :)', '')).not.toBe(MOCK_EMPTY_TEXT);

    fireEvent.change(nameInput, {
      target: { value: MOCK_EMPTY_TEXT_WITH_SPACE },
    });
    fireEvent.click(button);

    expect(button.textContent.replace(' :)', '')).not.toBe(
      MOCK_EMPTY_TEXT_WITH_SPACE
    );
  });
});

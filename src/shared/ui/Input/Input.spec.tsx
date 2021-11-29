import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
  const setup = (inputInitialValue: any) => {
    const MOCK_ARIA_LABEL = 'input';
    const utils = render(
      <Input aria-label={MOCK_ARIA_LABEL} initial-value={inputInitialValue} />
    );
    const input = utils.getByLabelText(MOCK_ARIA_LABEL) as HTMLInputElement;

    return {
      input,
      ...utils,
    };
  };

  it('should correctly render input element', () => {
    const { input } = setup('initial text');

    expect(input).toBeTruthy();
  });

  it('should correctly update his value', () => {
    const INPUT_NEW_VALUE = 'new value';
    const INPUT_ANOTHER_NEW_VALUE = 'another value';
    const EMPTY_VALUE = '';
    const { input } = setup('initial text');

    fireEvent.change(input, { target: { value: INPUT_NEW_VALUE } });

    expect(input.value).toBe(INPUT_NEW_VALUE);

    fireEvent.change(input, { target: { value: INPUT_ANOTHER_NEW_VALUE } });

    expect(input.value).toBe(INPUT_ANOTHER_NEW_VALUE);

    fireEvent.change(input, { target: { value: EMPTY_VALUE } });

    expect(input.value).toBe(EMPTY_VALUE);
  });
});

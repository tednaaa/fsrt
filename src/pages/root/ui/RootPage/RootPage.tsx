import React, { useState } from 'react';
import { Button, Container, Input } from '@/shared/ui';
import { useInput } from '@/shared/hooks';

export const RootPage = () => {
  const [buttonValue, setButtonValue] = useState('Click Me!');
  const [inputValue, handleInputChange, setInputValue] = useInput('');

  return (
    <div>
      <Container>
        <div
          style={{
            padding: 30,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <h1
            aria-label="Page title"
            style={{ fontSize: 28, lineHeight: '40px', color: 'darkcyan' }}
          >
            Hello World! :)
          </h1>
          <Input
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: 200, textAlign: 'center' }}
            placeholder="What is your name? =)"
            aria-label="Name input"
          />
          <Button
            aria-label="button"
            onClick={() => {
              setButtonValue(inputValue);
              setInputValue('Hi');
            }}
          >
            {buttonValue} :)
          </Button>
        </div>
      </Container>
    </div>
  );
};

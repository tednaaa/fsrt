import React from 'react';
import { Button, Container, Input } from '@/shared/ui';

export const RootPage = () => {
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
          <h1 style={{ fontSize: 28, lineHeight: '40px', color: 'darkcyan' }}>
            Hello World! :)
          </h1>
          <Input
            style={{ width: 200, textAlign: 'center' }}
            initial-value="fsafs"
            placeholder="What is your name? =)"
          />
          <Button>Click me!</Button>
        </div>
      </Container>
    </div>
  );
};

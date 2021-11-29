import clsx from 'clsx';
import React, { FC, InputHTMLAttributes } from 'react';
import { useInput } from '@/shared/hooks';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  'initial-value': any;
}

export const Input: FC<Props> = (props) => {
  const [inputValue, handleInputChange] = useInput(props['initial-value']);

  return (
    <input
      value={inputValue}
      onChange={handleInputChange}
      className={clsx(styles.input, props.className)}
      {...props}
    />
  );
};

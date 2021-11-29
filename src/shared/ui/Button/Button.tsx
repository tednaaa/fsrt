import React, { FC } from 'react';
import styles from './Button.module.scss';

export const Button: FC = (props) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

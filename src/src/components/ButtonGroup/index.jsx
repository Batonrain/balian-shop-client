import React from 'react';
import Button from '@components/Button';

export default function ButtonGroup({ buttons = [] }) {
  return (
    <>
      {buttons.map((button, index) => (
        <Button
          key={index}
          content={button.content}
          className={button.className}
          onClick={button.onClick}
          type={button.type}
          disabled={button.disabled}
        />
      ))}
    </>
  );
}
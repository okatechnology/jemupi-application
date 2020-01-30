import React from 'react';
import BaseButton from '../components/BaseButton';

const links: ToppageLink[] = [
  {
    name: 'clothes',
    background: 'red',
    to: 'clothes',
    useable: true,
  },
  {
    name: 'food',
    background: 'blue',
    to: '',
    useable: false,
  },
  {
    name: 'Electronics',
    background: 'green',
    to: '',
    useable: false,
  },
];

const Top = () => {
  return (
    <>
      {links.map((item) => (
        <BaseButton
          background={item.background}
          to={`/choose/${item.to}`}
          color="white"
          height={`${window.innerHeight / 3}px`}
          width="100%"
          fontSize="5rem"
          useable={item.useable}
          key={item.name}
        >
          {item.name}
        </BaseButton>
      ))}
    </>
  );
};

export default Top;

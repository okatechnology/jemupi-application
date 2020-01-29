import React from 'react';
import BaseButton from '../components/BaseButton';

const links: ToppageLink[] = [
  {
    name: '服',
    background: 'red',
    to: 'clothes',
    useAble: true,
  },
  {
    name: '食べ物',
    background: 'blue',
    to: '',
    useAble: false,
  },
  {
    name: '電子機器',
    background: 'green',
    to: '',
    useAble: false,
  },
];

const Top = () => {
  return (
    <>
      {links.map((item) => (
        <BaseButton
          background={item.background}
          to={`choose/${item.to}`}
          color="white"
          height={`${window.innerHeight / 3}px`}
          width="100%"
          fontSize="5rem"
          useAble={item.useAble}
          key={item.name}
        >
          {item.name}
        </BaseButton>
      ))}
    </>
  );
};

export default Top;

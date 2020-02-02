import React from 'react';
import BaseButton from '../components/BaseButton';
import styled from 'styled-components';

const links: ToppageLink[] = [
  {
    name: 'clothes',
    background: 'https://pbs.twimg.com/media/EPyR2AdVUAEG2B0?format=jpg&name=900x900',
    to: 'clothes',
    useable: true,
  },
  {
    name: 'food',
    background: 'https://pbs.twimg.com/media/EPyR2AkUcAALQWB?format=jpg&name=small',
    to: '',
    useable: false,
  },
  {
    name: 'Electronics',
    background: 'https://pbs.twimg.com/media/EPyR2AdUwAAFRuY?format=jpg&name=small',
    to: '',
    useable: false,
  },
];

const Top = () => {
  return (
    <>
      {links.map((item) => (
        <BaseButton
          to={`/choose/${item.to}`}
          color="white"
          background=""
          bgImage={item.background}
          height={`${window.innerHeight / 3}px`}
          width="100%"
          fontSize="5rem"
          useable={item.useable}
          key={item.name}
        >
          <Text>{item.name}</Text>
        </BaseButton>
      ))}
    </>
  );
};

const Text = styled.span`
  text-shadow: black 0 0 10px;
`;

export default Top;

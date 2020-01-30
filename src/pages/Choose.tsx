import React from 'react';
import Header from '../components/Header/Header';
import FakeAD from '../components/FakeAD';

interface ChooseProps {
  pagename: 'clothes';
}

const Choose = ({ pagename }: ChooseProps) => {
  return (
    <>
      <Header />
      <FakeAD />
    </>
  );
};

export default Choose;

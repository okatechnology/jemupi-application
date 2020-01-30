import React from 'react';
import styled from 'styled-components';
import Title from '../Title';
import CartIcon from '../CartIcon';
import Serch from '../Serch';

const Header = () => {
  return (
    <CustomHeader>
      <Title />
      <CartIcon />
      <Serch />
    </CustomHeader>
  );
};

const CustomHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 5rem;
  padding: 0 1rem;
`;

export default Header;

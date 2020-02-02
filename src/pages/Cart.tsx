import React from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import DeliverItem from '../components/DeliverItem';
import useGlobalState from '../global/ChooseContext';
import { itemData } from '../data/itemdata';
import ItemInCart from '../components/ItemInCart';

const Cart = () => {
  const { chosenItemData } = useGlobalState();

  return (
    <>
      <Header />
      <Title>Cart</Title>
      <DeliverItem />
      {itemData.map((item, index) => {
        if (chosenItemData[index] > 0) {
          return <ItemInCart name={item.name} path={item.imagePath} index={index} />;
        }
      })}
      {chosenItemData.map((number, index) => {
        if (number > 0) {
          itemData[index];
        }
      })}
    </>
  );
};

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  margin: 1rem 0 0;
`;

export default Cart;

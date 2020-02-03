import React from 'react';
import styled from 'styled-components';
import { itemData } from '../data/itemdata';

interface ItemdetailsProps {
  index: string;
}

const Itemdetails = ({ index }: ItemdetailsProps) => {
  return (
    <>
      <CustomImg src={itemData[Number(index)].imagePath} />
      <CustomTitle>{itemData[Number(index)].name}</CustomTitle>
    </>
  );
};

const CustomImg = styled.img`
  width: calc(${window.innerWidth}px - 1rem);
  object-fit: contain;
`;

const CustomTitle = styled.h1`
  margin: 1rem auto;
  text-align: center;
`;

const CustomDesc = styled.p``;

export default Itemdetails;

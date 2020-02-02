import React from 'react';
import styled from 'styled-components';
import useGlobalState from '../global/ChooseContext';

interface ItemInCartProps {
  name: string;
  path: string;
  index: number;
}

const ItemInCart = ({ name, path, index }: ItemInCartProps) => {
  const { chosenItemData, hundleMinus, hundlePlus } = useGlobalState();

  return (
    <>
      <CustomWrapper>
        <CustomImg src={path} />
        <CustomText>{name}</CustomText>
        <ButtonsWrapper>
          <Button onClick={hundleMinus(index)}>-</Button>
          <ItemDataNumber>{chosenItemData[index]}</ItemDataNumber>
          <Button onClick={hundlePlus(index)}>+</Button>
        </ButtonsWrapper>
      </CustomWrapper>
    </>
  );
};

const CustomImg = styled.img`
  width: 12rem;
  height: 12rem;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  grid-area: 1 / 1 / 3 / 2;
`;

const CustomText = styled.p`
  font-size: 1.6rem;
  margin: 0 auto;
  place-self: center;
`;

const CustomWrapper = styled.div`
  width: calc(100% - 2rem);
  height: max-content;
  padding: 1rem;
  border: 1px solid #999;
  box-shadow: 0.5rem 0.5rem #555;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 12rem 1fr;
`;

const Button = styled.a`
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
`;

const ItemDataNumber = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ItemInCart;

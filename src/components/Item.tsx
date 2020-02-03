import React from 'react';
import styled from 'styled-components';
import useGlobalState from '../global/ChooseContext';
import { Link } from 'react-router-dom';

interface ItemProps {
  name: string;
  path: string;
  index: number;
}

const Item = ({ name, path, index }: ItemProps) => {
  const { chosenItemData, hundleMinus, hundlePlus } = useGlobalState();

  return (
    <>
      <CustomWrapper chosen={chosenItemData[index] > 0}>
        <Link to={`/details/${index}`}>
          <CustomImg src={path} />
        </Link>
        <CustomText>{name}</CustomText>
        <ItemDataWrapper>
          <Button onClick={hundleMinus(index)}>-</Button>
          <ItemDataNumber>{chosenItemData[index]}</ItemDataNumber>
          <Button onClick={hundlePlus(index)}>+</Button>
        </ItemDataWrapper>
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
`;

const CustomText = styled.p`
  font-size: 1.6rem;
  margin: 1rem auto 0;
`;

interface WrapperProps {
  chosen: boolean;
}

const CustomWrapper = styled.div<WrapperProps>`
  max-width: 17rem;
  width: calc(50% - 1rem);
  padding: 1rem;
  border: 1px solid #999;
  box-shadow: 0.5rem 0.5rem #555;
  margin: 0 0 2rem;
  background-color: ${({ chosen }) => (chosen ? '#d8ffd4' : 'white')};
`;

const Button = styled.a`
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemDataWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
`;

const ItemDataNumber = styled.p`
  font-size: 1.6rem;
  margin: 0;
`;

export default Item;

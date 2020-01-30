import React from 'react';
import styled from 'styled-components';

interface ItemProps {
  name: string;
  path: string;
}

const Item = ({ name, path }: ItemProps) => {
  return (
    <>
      <CustomWrapper>
        <CustomImg src={path} />
        <CustomText>{name}</CustomText>
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

const CustomWrapper = styled.div`
  max-width: 17rem;
  width: calc(50% - 1rem);
  padding: 1rem;
  border: 1px solid #999;
  box-shadow: 0.5rem 0.5rem #555;
  margin: 0 0 2rem;
`;

export default Item;

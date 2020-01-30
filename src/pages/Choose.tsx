import React from 'react';
import Header from '../components/Header/Header';
import FakeAD from '../components/FakeAD';
import Item from '../components/Item';
import { itemData } from '../data/itemdata';
import styled from 'styled-components';

interface ChooseProps {
  pagename: 'clothes';
}

const Choose = ({ pagename }: ChooseProps) => {
  return (
    <>
      <Header />
      <FakeAD />
      <ItemWrapper>
        {itemData.map((item) => {
          if (item.type === pagename) {
            return <Item name={item.name} path={item.imagePath} key={item.name} />;
          }
        })}
      </ItemWrapper>
    </>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
`;

export default Choose;

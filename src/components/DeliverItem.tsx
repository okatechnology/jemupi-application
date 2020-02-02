import React from 'react';
import styled from 'styled-components';
import useGlobalState from '../global/ChooseContext';

const DeliverItem = () => {
  const { chosenItemData, resetCart } = useGlobalState();
  const itemNumber = chosenItemData.reduce(
    (prev, curr) => (curr > 0 ? prev + 1 : prev),
    0,
  );
  const hundleDeliver = (e: React.MouseEvent) => {
    e.preventDefault();
    if (confirm('Would you like to confirm your order now?')) {
      alert("Thank you! We'll deliver to you!");
      resetCart();
    }
  };

  return (
    <>
      <ItemNumber>
        <Red>{itemNumber}</Red> kind of items is in the cart!!
      </ItemNumber>
      <DeliverButton onClick={hundleDeliver}>Deliver</DeliverButton>
    </>
  );
};

const ItemNumber = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem 0 0;
`;

const Red = styled.span`
  color: red;
`;

const DeliverButton = styled.a`
  font-size: 2rem;
  background-color: red;
  color: white;
  width: 20rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  margin: 1rem auto;
`;

export default DeliverItem;

import React from 'react';
import BaseButton from './BaseButton';

const CartIcon = () => {
  return (
    <BaseButton
      color="white"
      background="white"
      fontSize="4rem"
      height="auto"
      useAble={true}
      width="auto"
      to="/cart"
    >
      🛒
    </BaseButton>
  );
};

export default CartIcon;

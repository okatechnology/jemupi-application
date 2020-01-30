import React from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const Title = () => {
  return (
    <CustomForm>
      <CustomTextInput type="text" placeholder="serch" />
      <BaseButton
        background="white"
        color="black"
        fontSize="2rem"
        height="auto"
        to=""
        useable={false}
        width="auto"
      >
        🔍
      </BaseButton>
    </CustomForm>
  );
};

const CustomTextInput = styled.input`
  font-size: 1.4rem;
  width: calc(100% - 4rem);
`;

const CustomForm = styled.form`
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-around;
`;

export default Title;

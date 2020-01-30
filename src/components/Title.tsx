import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = () => {
  return <CustomTitle to="/">SHARING</CustomTitle>;
};

const CustomTitle = styled(Link)`
  font-size: 4rem;
  margin: 0;
`;

export default Title;

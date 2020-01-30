import React from 'react';
import styled from 'styled-components';

const FakeAD = () => {
  return (
    <CustomDiv
      onClick={(e) => {
        e.preventDefault();
        alert('今はもう募集してません\nWe are no longer recruiting now');
      }}
    >
      Clerks Wanted!!!
    </CustomDiv>
  );
};

const CustomDiv = styled.div`
  background-image: url('https://1.bp.blogspot.com/-SUlLNJVJmgI/Wn1ZWGFksjI/AAAAAAABKLI/ULWe2rWiwroQM3FVKd5kK0SSHDAyglcgQCLcBGAs/s800/ayashii_koukoku_kyuujin.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 12rem;
  width: 100%;
  margin: 1rem 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding-left: 2rem;
  font-size: 1.6rem;
  text-shadow: 2px 2px 1px #fff, -2px 2px 1px #fff, 2px -2px 1px #fff, -2px -2px 1px #fff,
    2px 0px 1px #fff, 0px 2px 1px #fff, -2px 0px 1px #fff, 0px -2px 1px #fff;
`;

export default FakeAD;

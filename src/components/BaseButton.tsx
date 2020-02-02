import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = (props: BaseButtonProps) => {
  return (
    <>
      {props.useable === false ? (
        <NotInServiceButton
          onClick={(e) => {
            e.preventDefault();
            alert('Not yet available');
          }}
          {...props}
        />
      ) : props.to === '' ? (
        <CustomButton {...props} />
      ) : (
        <CustomLink {...props} />
      )}
    </>
  );
};

type StyleProps = Omit<BaseButtonProps, 'children' | 'to'>;

const styleCreator = css<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  background-color: ${({ background }) => background};
  background-image: url(${({ bgImage }) => (bgImage ? bgImage : '')});
`;

const CustomLink = styled(Link)`
  ${styleCreator}
`;

const CustomButton = styled.div`
  ${styleCreator}
`;

const NotInServiceButton = styled.div`
  ${styleCreator}
`;

export default BaseButton;

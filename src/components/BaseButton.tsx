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
            alert('今はまだ使えません\nNot yet available');
          }}
          {...props}
        />
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
  background-color: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize};
`;

const CustomLink = styled(Link)`
  ${styleCreator}
`;

const NotInServiceButton = styled.div`
  ${styleCreator}
`;

export default BaseButton;

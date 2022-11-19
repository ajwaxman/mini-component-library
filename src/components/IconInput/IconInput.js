import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <>
      <Wrapper type="text" placeholder={placeholder} style={{'width': width}}>
      </Wrapper>
      <IconElement id={icon} size={16}/>
    </>
  );
};

const Wrapper = styled.input`
  position: relative;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px 0;
  padding-left: 24px;
  font-size: ${14/16}rem;
  margin-left: 4px;
  width: var(--width);

  &::placeholder {

  }
`

const IconElement = styled(Icon)`
  position: absolute;
  left: 20px;
  top: 20px;
`

export default IconInput;

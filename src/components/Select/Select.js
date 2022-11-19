import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Icon id="chevron-down" className="icon" size={24} strokeWidth={2} htmlFor="selector"/>
      <SelectElement id="selector" value={value} onChange={onChange}>
        {children}
      </SelectElement>
    </Wrapper>
  );
};

const SelectElement = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  color: inherit;


  background: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 48px;
  border-radius: 8px;
  cursor: pointer;
`
const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  color: ${COLORS.gray700};
  .icon {
    position: absolute;
    right: 10px;
    top: 8px;
    color: ${COLORS.gray700};
    pointer-events: none;
  }

  &:hover {
    color: ${COLORS.black};

    .icon {
      color: ${COLORS.black};
    }
  }
`

export default Select;

/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {

  const rounded = value > 99.5;

  return (
    <Progress 
      value={value}
      aria-valuenow={value} 
      aria-label="A bounded progress bar from 0 to 100"
      size={size} 
      className={size} 
      rounded={rounded} 
      max="100"
    >
      <VisuallyHidden>{value}</VisuallyHidden>
    </Progress>
  );
};

const Progress = styled.progress`
  width: 370px;
  &[value] {
    -webkit-appearance: none;
    appearance: none;
  }

  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: 4px;
    overflow: hidden;
  }

  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ;
    border-radius: ${props => props.rounded ? '4px' : '4px 0 0 4px'};
  }

  &.large {

    &::-webkit-progress-bar {
      height: 24px;
      padding: 4px;
      border-radius: 8px;
    }

    &::-webkit-progress-value {
      height: 16px;
    }
  }

  &.medium {

    &::-webkit-progress-bar {
      height: 12px;
      padding: 0;
      border-radius: 4px;
    }
  }


  &.small {

    &::-webkit-progress-bar {
      height: 8px;
    }
  }
`

export default ProgressBar;

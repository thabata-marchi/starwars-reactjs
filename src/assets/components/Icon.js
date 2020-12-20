import styled from 'styled-components';
import { colors } from '../../theme';

export const DarthVader = colors.white;
export const LukeSkywalker = colors.dark_gray;

export const Icon = styled.div`
  color: ${props => props.iconColor || DarthVader};
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: first;
  position: absolute;
  padding: 10px;
  cursor: pointer;
`
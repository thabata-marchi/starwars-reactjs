import styled from 'styled-components';
import { colors } from '../../theme';

export const Text = styled.h1`
  color: ${props => props.colorLuke || colors.white}; 
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 44px;
`
export const TextBold = styled.strong`
  font-weight: 700;
`

export const Icon = styled.div`
  color: ${colors.white};
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: left;
  justify-content: first;
  position: absolute;
  padding: 10px;
`

export const Back = styled.p`
  text-decoration: none;
  margin-left: 5px;
  margin-top: -3px;
`
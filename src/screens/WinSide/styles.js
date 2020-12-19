import styled from 'styled-components';
import { colors } from '../../theme';

export const Luke = colors.yellow;
export const LukeColor = colors.dark_gray;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor || colors.dark_gray};
  min-height: 100vh;
  justify-content: space-around;
`
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
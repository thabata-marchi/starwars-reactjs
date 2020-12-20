import styled from 'styled-components';
import { colors } from '../../theme';

export const Darth = colors.dark_gray;
export const Luke = colors.yellow;
export const LukeColor = colors.dark_gray;

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.bgColor || colors.white};
  min-height: 100vh;
  justify-content: space-around;

  @media (max-width: 610px) {
    justify-content: flex-start;
  }

`
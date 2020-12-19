import styled from 'styled-components';
import { colors } from '../../theme';

export const Blue = {
  bg: colors.primary,
  color: colors.white,
  border: colors.primary,
  bgHover: colors.white,
  colorHover: colors.primary,
  borderHover: colors.primary,
}

export const Black = {
  bg: colors.white,
  color: colors.dark_gray,
  border: colors.white,
  bgHover: colors.dark_gray,
  colorHover: colors.white,
  borderHover: colors.white,
}

export const Yellow = {
  bg: colors.dark_gray,
  color: colors.yellow,
  border: colors.dark_gray,
  bgHover: colors.yellow,
  colorHover: colors.dark_gray,
  borderHover: colors.dark_gray,
}

export const Button = styled.button`
  background-color: ${props => props.btnColor.bg || Blue.bgf};
  color:  ${props => props.btnColor.color || Blue.color}; 
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid ${props => props.btnColor.border || Blue.border};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.btnColor.bgHover || Blue.bgHover}; 
    color:  ${props => props.btnColor.colorHover || Blue.colorHover}; 
    border: 1px solid ${props => props.btnColor.borderHover || Blue.borderHover};
  }
`
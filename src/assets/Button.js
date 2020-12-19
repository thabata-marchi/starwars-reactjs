import styled from 'styled-components';
import { colors } from '../theme';

export const Button = styled.button`
  background-color: ${props => props.btnColor || colors.primary};
  color:  ${props => props.btnColor || colors.white}; 
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  padding: 5px 20px;
  border-radius: 10px;
  margin-top: 8%;
  border: 1px solid ${props => props.btnColor || colors.primary};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.btnHover || colors.white}; 
    color:  ${props => props.btnHover || colors.primary}; 
    border: 1px solid ${props => props.btnHover || colors.primary};
  }
`
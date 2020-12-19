import styled from 'styled-components';
import { colors } from '../../theme';

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white}; 
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
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary}; 
    border: 1px solid ${colors.primary};
  }
  &:active {
    border: 1px solid ${colors.primary};
  }
`
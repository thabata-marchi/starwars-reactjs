import styled from 'styled-components';
import { colors } from '../../theme';

export const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  min-height: 100vh;

  @media (max-width: 610px) {
    justify-content: center;
  } 
`

export const Title = styled.h1`
  color: ${colors.primary}; 
  font-size: 72px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 88px;
  margin-top: 20%;
  @media (max-width: 610px) {
    margin: 0 0 10px;
    line-height: 70px;
  } 

`
export const TextBold = styled.strong`
  font-family: Lato;
  font-weight: 700;
`
export const Subtitle = styled.h2`
  color: ${colors.primary}; 
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 17px;
  margin-bottom: 15%;
`
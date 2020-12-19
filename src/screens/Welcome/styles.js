import styled from 'styled-components';
import { colors } from '../../theme';

export const Container = styled.div`
  margin: 10% auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TextBold = styled.strong`
  color: ${colors.primary}; 
  font-size: 72px;
  font-family: Lato;
  font-weight: 700;
`
export const Title = styled.h1`
  color: ${colors.primary}; 
  font-size: 72px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 88px;
`
export const Subtitle = styled.h2`
  color: ${colors.primary}; 
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 17px;
`
export const Button = styled.h2`
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
`
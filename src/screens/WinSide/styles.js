import styled from 'styled-components';
import { colors } from '../../theme';

export const Text = styled.h1`
  color: ${props => props.colorLuke || colors.white}; 
  font-size: 36px;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 44px;
  @media (max-width: 610px) {
    margin: 0 5%;
  }
`
export const TextBold = styled.strong`
  font-weight: 700;
`
export const Back = styled.p`
  text-decoration: none;
  margin-left: 5px;
  margin-top: -3px;
`

export const ContentCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const TextError = styled.p`
  text-align: center;
  font-size: 20px;
  font-family: Montserrat;
  font-weight: 400;
  margin-bottom: 20px;
`
export const BgLoad = styled.p`
  background-color: ${colors.dark_gray}
`
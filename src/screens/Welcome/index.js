import React from 'react';
import {
  Title, 
  Subtitle,
  TextBold,
  Container
} from './styles';
import { Button } from '../../assets/Buttons/blue';

function Welcome() {
  return (
    <Container>
      <Title>Welcome to <TextBold>iClinic</TextBold></Title>
      <Subtitle>FRONTEND CHALLENGE</Subtitle>
      <Button>START</Button>
    </Container>
  );
}

export default Welcome;
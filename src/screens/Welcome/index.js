import React from 'react';
import {
  Title, 
  Subtitle,
  TextBold,
  Container
} from './styles';
import { Button } from '../../assets/Button';

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

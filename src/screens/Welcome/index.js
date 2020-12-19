import React from 'react';
import { Link } from "react-router-dom";
import {
  Title, 
  Subtitle,
  TextBold,
  Content, 
} from './styles';

import { Button, Blue } from '../../assets';

function Welcome() {
  return (
    <Content>
      <Title>Welcome to <TextBold>iClinic</TextBold></Title>
      <Subtitle>FRONTEND CHALLENGE</Subtitle>
      <Link to="/win-side">
        <Button btnColor={Blue}>START</Button>
      </Link>
    </Content>
  );
}

export default Welcome;

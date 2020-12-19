import React from 'react';
import {
  Text,
  TextBold,
  Container, 
  Luke,
  LukeColor
} from './styles';
import { Image, Button, Black, Yellow } from '../../assets';

import DarthVader from '../../assets/svg/darth-vader.svg';
import LukeSkywalker from '../../assets/svg/luke-skywalker.svg';


function WinSide() {
  return (
    <>
    <Container>
      <Button btnColor={Black}>choose your path again, Padawan</Button>
      <Image src={DarthVader} alt="Darth Vader" />      
      <Text>Your master is <TextBold>Darth Vader</TextBold></Text>
    </Container>

    <Container bgColor={Luke}>
      <Button btnColor={Yellow}>choose your path again, Padawan</Button>
      <Image src={LukeSkywalker} alt="Luke Skywalker" />      
      <Text colorLuke={LukeColor}>Your master is <TextBold>Luke Skywalker</TextBold></Text>
    </Container>

    </>
  );
}

export default WinSide;

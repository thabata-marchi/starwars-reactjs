import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";

import {
  Text,
  TextBold,
  Back,
} from './styles';

import { 
  Image,
  Icon,
  DarthVader,
  LukeSkywalker,
  Button,
  Black,
  Yellow,
  Container,
  Luke,
  LukeColor,
  Darth,
} from '../../assets';

import { store } from '../../store/';

import DarthVaderSVG from '../../assets/svg/darth-vader.svg';
import LukeSkywalkerSVG from '../../assets/svg/luke-skywalker.svg';

function WinSide() {
  const history = useHistory();
  const globalState = useContext(store);
  const {dataWinner} = globalState;

  console.log("dataWinner", dataWinner); 
  
  const GoBack = () => {
    history.push("/");
  }
 

  return ( 
    <>
    <Icon iconColor={ dataWinner.name === "Darth Vader" ? DarthVader : LukeSkywalker} onClick={GoBack}>
      <HiArrowLeft /> 
      <Back>back</Back>
    </Icon>

    <Container bgColor={ dataWinner.name === "Darth Vader" ? Darth : Luke}>
      <Button btnColor={dataWinner.name === "Darth Vader" ? Black : Yellow}>choose your path again, Padawan</Button>
      <Image src={dataWinner.name === "Darth Vader" ? DarthVaderSVG : LukeSkywalkerSVG} alt="Darth Vader" />      
      <Text colorLuke={dataWinner.name === "Darth Vader" ? null : LukeColor} >Your master is <TextBold>{dataWinner.name}</TextBold></Text>
    </Container>

    </>
  );
}

export default WinSide;

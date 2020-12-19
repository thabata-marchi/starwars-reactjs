import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from "react-router-dom";

import { HiArrowLeft } from "react-icons/hi";


import {
  Text,
  TextBold,
  Icon,
  Back,
} from './styles';

import { 
  Image,
  Button,
  Black,
  Yellow,
  Container,
  Luke,
  LukeColor,
  Darth,
} from '../../assets';

import DarthVader from '../../assets/svg/darth-vader.svg';
import LukeSkywalker from '../../assets/svg/luke-skywalker.svg';
// import IconBack from '../../assets/svg/back.svg';


function WinSide() {
  const [luke, setLuke] = useState([]);
  const [darth, setDarth] = useState([]);

  useEffect(() => {
    api.ConnectApiLuke()
    .then(response => {
      if( response.status === 200 ){
        setLuke(response.data);
        console.log("LUKE", response);
      }
  })
    .catch( error => console.log("AQUI DEU RUIM",error) )
  }, [])  

  useEffect(() => {
    api.ConnectApiDarth()
    .then(response => {
      if( response.status === 200 ){
        setDarth(response.data);
        console.log("DARTH", response);
      }
  })
    .catch( error => console.log("AQUI DEU RUIM",error) )
  }, [])  

  return ( 
    <>
      <Link to="/">
        <Icon>
          <HiArrowLeft /> 
          <Back>back</Back>
        </Icon>
      </Link>

    <Container bgColor={Darth}>

      <Button btnColor={Black}>choose your path again, Padawan</Button>
      <Image src={DarthVader} alt="Darth Vader" />      
      <Text>Your master is <TextBold>{darth.name}</TextBold></Text>
    </Container>

    <Container bgColor={Luke}>
      <Button btnColor={Yellow}>choose your path again, Padawan</Button>
      <Image src={LukeSkywalker} alt="Luke Skywalker" />      
      <Text colorLuke={LukeColor}>Your master is <TextBold>{luke.name}</TextBold></Text>
    </Container>

    </>
  );
}

export default WinSide;

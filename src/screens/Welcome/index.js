import React, { useEffect, useState, useContext, useCallback } from 'react';
import { useHistory } from "react-router-dom";

import api from '../../services/api';
import {
  Title, 
  Subtitle,
  TextBold,
  Content, 
} from './styles';

import { store } from '../../store/';

import { Button, Blue } from '../../assets';

const Welcome = () => {
  const history = useHistory();
  const globalState = useContext(store);
  const {setData} = globalState;

  const GoWinner = (params) => {
    setData(params);
    return history.push("/win-side");
  }

  const initRequest = () => {
    connectLuke();
    connectDarth();
  }

  const connectLuke = useCallback( () => {
     api.ConnectApiLuke()
    .then(response => {
      if( response.status === 200 ){
        GoWinner(response.data);
      }

    })
    .catch( error => console.log(error) )
  },[])

  const connectDarth = useCallback(() => {
    api.ConnectApiDarth()
    .then(response => {
      if( response.status === 200 ){
        GoWinner(response.data);
      }
  })
    .catch( error => console.log(error) )    
  },[])


  return (
    <Content>
      <Title>Welcome to <TextBold>iClinic</TextBold></Title>
      <Subtitle>FRONTEND CHALLENGE</Subtitle>
      <Button btnColor={Blue} onClick={initRequest}>START</Button>
    </Content>
  );
}

export default Welcome;

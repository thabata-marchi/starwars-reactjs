import {useReducer} from "react";
import {globalReducer} from '../reducers/global';

export const initialState = {dataWinner: []};
  
const GlobalActions = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const globalDispatch = {
    dataWinner: state.dataWinner,

    setData: (dataWinner) => {
      dispatch({ type: "WINNER_DATA", dataWinner });
    },

  };
 
 return {
   globalDispatch,
   initialState,
 };
};

export default GlobalActions;
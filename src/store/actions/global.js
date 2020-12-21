import {useReducer} from "react";
import {globalReducer} from '../reducers/global';

export const initialState = {};
  
const GlobalActions = () => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const globalDispatch = {
    dataWinner: state.dataWinner,
    loading: state.loading,

    setData: (dataWinner) => {
      dispatch({ type: "WINNER_DATA", dataWinner });
    },

    setLoad: (loading) => {
      dispatch({ type: "LOAD", loading });
    },

  };
 
 return {
   globalDispatch,
   initialState,
 };
};

export default GlobalActions;
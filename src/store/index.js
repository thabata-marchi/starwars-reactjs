import React from "react";
import GlobalActions, {initialState} from "./actions/global";
 
export const store = React.createContext(initialState);
const { Provider } = store;

export const StateProvider = ({ children }) => {
  const { globalDispatch } = GlobalActions();
  return <Provider value={globalDispatch}>{children}</Provider>;
};  
 
export default{ store, StateProvider};
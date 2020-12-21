export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'WINNER_DATA':
      return {
        ...state,
        dataWinner: action.dataWinner,
      };

    case 'LOAD':
      return {
        ...state,
        loading: action.loading,
      };  
  
    default:
      return state;
  }
};
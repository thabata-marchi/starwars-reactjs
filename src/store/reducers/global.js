export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'WINNER_DATA':
      return {
        ...state,
        dataWinner: action.dataWinner,
      };
  
    default:
      return state;
  }
};
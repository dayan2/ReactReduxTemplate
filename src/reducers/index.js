import { SAVE_CARD } from "../constants/index";
const initialState = {
  cardDetails: {}
};
function rootReducer(state = initialState, action) {
  if (action.type === SAVE_CARD) {
    //state.cardDetails.push(action.payload);
  }
  return state;
}
export default rootReducer;
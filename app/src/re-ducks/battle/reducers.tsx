import { AnyAction } from 'redux';
import * as Actions from './actions';
import initialState from '../store/initialState';

const BattleReducer = (state = initialState.users, action: AnyAction) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      // スプレッド構文で、以前のstateと呼ばれたactionのstateをマージする
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default BattleReducer;

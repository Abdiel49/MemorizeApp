import {AppState} from '../context/AppProvider';
import {ReducerTypes} from './reducerTypes';

export interface ActionRecuderInterface {
  type: ReducerTypes;
  payload: string | {} | any;
}

export const appReducer = (state: AppState, action: ActionRecuderInterface) => {
  switch (action.type) {
    case ReducerTypes.CHOSSEDIFFICULTY:
      return {...state, difficulty: action.payload};

    default:
      return state;
  }
};

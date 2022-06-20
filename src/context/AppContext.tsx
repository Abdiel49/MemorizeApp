import {createContext} from 'react';
import {ActionRecuderInterface} from '../reducer/appReducer';
// import {ReducerTypes} from '../reducer/reducerTypes';
import {AppState} from './AppProvider';

interface AppContextProps {
  state: AppState;
  dispatch: React.Dispatch<ActionRecuderInterface>;
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export default AppContext;

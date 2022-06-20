import React, {useReducer} from 'react';
import AppContext from './AppContext';

import {appReducer} from '../reducer/appReducer';

interface Props {
  children: React.ReactNode;
}

export interface AppState {
  difficulty: string | null;
}

const initialState: AppState = {
  difficulty: null,
};

const AppProvider = ({children}: Props) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

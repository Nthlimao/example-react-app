import React, { createContext, useContext, useReducer } from "react";

import AppReducer from "./reducer";
import AppActions from "./actions";
import { AppContextType, AppStateType } from "./types";

const AppContext = createContext({});

const InitialState: AppStateType = { loading: false };

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  return (
    <AppContext.Provider value={{ state, actions: AppActions, dispatch }}>
      <>
        {state.loading && <div>Loading...</div>}
        {children}
      </>
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext) as AppContextType;
};

export { AppContext, AppProvider, useAppContext };

import React, { createContext, useContext, useReducer } from "react";

import AuthReducer from "./reducer";
import AuthActions from "./actions";
import InitialState from "./state";
import { AuthContextType } from "./types";

const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, InitialState);
  return (
    <AuthContext.Provider value={{ state, actions: AuthActions, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext) as AuthContextType;
};

export { AuthContext, AuthProvider, useAuthContext };

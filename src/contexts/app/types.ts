export enum AppActionOptions {
  setLoading = "SET_LOADING",
}

export type AppActionsType = {
  setLoading: (payload: boolean) => void;
};

export type AppStateType = {
  loading: boolean;
};

export type AppContextType = {
  state: AppStateType;
  actions: AppActionsType;
  dispatch: any;
};

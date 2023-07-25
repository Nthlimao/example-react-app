import { AppActionOptions, AppActionsType } from "./types";

const AppActions: AppActionsType = {
  setLoading: (payload) => ({ type: AppActionOptions.setLoading, payload }),
};

export default AppActions;

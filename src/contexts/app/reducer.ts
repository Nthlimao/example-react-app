import { AppActionOptions, AppStateType } from "./types";

const AppReducer = (state: AppStateType, action: any) => {
  switch (action.type) {
    case AppActionOptions.setLoading:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AppReducer;

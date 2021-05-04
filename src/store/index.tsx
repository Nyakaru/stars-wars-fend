import React from "react";

import * as Types from "./interface";
import appReducers from "./reducers";

const { combinedAppReducers, combinedAppState } = appReducers;
const AppStateContext = React.createContext(combinedAppState);
const AppDispatchContext = React.createContext<Types.Dispatch | undefined>(
  undefined
);

function AppProvider(props: any) {
  const [state, dispatch] = React.useReducer(
    combinedAppReducers,
    combinedAppState
  );
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {props.children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}
export { AppProvider, useAppState, useAppDispatch };

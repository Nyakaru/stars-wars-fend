import { appReducers } from "./reducers";

export interface Action {
  type: string;
  payload?: any;
}

// export type AppState = typeof appState;
export type Dispatch = (action: Action) => void;
export interface SettingsReducerProps {
  navCollapsed: boolean;
  navStyle: string;
  layoutType: string;
  themeType: string;
  themeColor: string;
  pathname: string;
  width: number;
  isDirectionRTL: boolean;
}

export interface AppState {
  settingsReducer: SettingsReducerProps;
  peopleReducer: PeopleReducerProps;
}

export type AppReducer = (state: AppState, action: Action) => AppState;

export interface PeopleReducerProps {
  isLoading: boolean;
  people: Array<Person>;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld: string;
}

export interface PeopleResponse {
  people: Person[];
}

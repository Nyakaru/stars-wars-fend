import combineReducers from "react-combine-reducers";

import { settingsReducer, initialSettings } from "./settings";
import { peopleReducer, initialPeopleState } from "./people";
import { AppReducer } from "../interface";

const [combinedAppReducers, combinedAppState] = combineReducers<AppReducer>({
  settingsReducer: [settingsReducer, initialSettings],
  peopleReducer: [peopleReducer, initialPeopleState],
});

const allReducers = { combinedAppReducers, combinedAppState };
export default allReducers;

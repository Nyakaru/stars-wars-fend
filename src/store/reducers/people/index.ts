import { Action } from "../../interface";
import {
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCESS,
} from "../../../constants/actionTypes";
import { PeopleReducerProps, Person } from "../../interface";

export const initialPeopleState: PeopleReducerProps = {
  isLoading: false,
  people: [] as Person[],
};

export const peopleReducer = (state: PeopleReducerProps, action: Action) => {
  switch (action.type) {
    case FETCH_PEOPLE_STARTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_PEOPLE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        people: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

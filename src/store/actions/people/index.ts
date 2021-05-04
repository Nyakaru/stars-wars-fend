import { OperationVariables, QueryResult } from "@apollo/client";
import { PeopleResponse, Dispatch } from "../../interface";
import {
  FETCH_PEOPLE_STARTED,
  FETCH_PEOPLE_SUCCESS,
} from "../../../constants/actionTypes";

export const fetchPeopleStarted = () => {
  return {
    type: FETCH_PEOPLE_STARTED,
  };
};

export const fetchPeopleSucces = (userData: PeopleResponse) => {
  return {
    type: FETCH_PEOPLE_SUCCESS,
    payload: userData,
  };
};
export const fetchUsers = (
  fetchUsersQuery: QueryResult<PeopleResponse, OperationVariables>,
  dispatch: Dispatch
) => {
  dispatch(fetchPeopleStarted());
  try {
    const { data }: QueryResult<PeopleResponse> = fetchUsersQuery;
    if (data) {
      //@ts-ignore
      dispatch(fetchPeopleSucces(data.people));
    }
  } catch (err) {
    console.log(err, "err");
  }
};

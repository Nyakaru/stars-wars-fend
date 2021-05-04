import { QueryResult } from "@apollo/client";

export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld?: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
}

export interface PeopleResponse {
  people: Person[];
}

export interface PersonResponse {
  searchPerson: {
    person: Person;
    homeworld: Planet;
  };
}

export type FetchPersonResponse = Omit<QueryResult, "data"> & {
  data: PersonResponse;
};

export interface TableProps {
  tableData: Array<Person>;
  onChange: (page: number) => void;
  current: number;
}

export interface Params {
  name: string;
}

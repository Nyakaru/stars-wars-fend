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
  searchPerson: Person;
}

export interface PlanetResponse {
  homeworld: Planet;
}

export interface TableProps {
  tableData: Array<Person>;
  onChange: (page: number) => void;
  current: number;
  onRow: (record: Person) => void;
}

export type SelectOption = {
  label: string;
  value: string;
};

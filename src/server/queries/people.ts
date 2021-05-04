import { gql } from "@apollo/client";

export const getPeopleQuery = gql`
  query people($page: String) {
    people(page: $page) {
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const searchPersonQuery = gql`
  query searchPerson($search: String!) {
    searchPerson(search: $search) {
      person {
        name
        height
        mass
        gender
        homeworld
      }
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
      }
    }
  }
`;

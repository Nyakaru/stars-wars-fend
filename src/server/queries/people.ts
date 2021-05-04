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
      name
      height
      mass
      gender
      homeworld
    }
  }
`;

export const getPlanetQuery = gql`
  query homeworld($url: String!) {
    homeworld(url: $url) {
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
`;

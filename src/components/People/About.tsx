import { Descriptions, Breadcrumb } from "antd";

import { useQuery } from "@apollo/client";

import { searchPersonQuery, getPlanetQuery } from "../../server/queries";
import { PersonResponse, PlanetResponse } from "../People/interface";

export const BreadCrumb = () => {
  return (
    <Breadcrumb style={{ marginBottom: 5 }}>
      <Breadcrumb.Item>
        <a href="/people/all">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/about/all">Person</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const props1 = {
  name: "Anakin Skywalker",
  height: "188",
  mass: "84",
  gender: "male",
  homeworld: {
    name: "Tatooine",
    rotation_period: "23",
    orbital_period: "304",
    diameter: "10465",
    climate: "arid",
    gravity: "1 standard",
    terrain: "desert",
    surface_water: "1",
    population: "200000",
  },
};

const About = (props) => {
  const { _id, name } = (props.location && props.location.state) || {};

  console.log({ _id, name });
  // const queryInput = {
  //   search: value
  // }
  // const fetchPeopleQuery = useQuery<PersonResponse>(searchPersonQuery, ({ variables: queryInput}));
  // const { data, loading } = fetchPeopleQuery;
  // console.log(data, loading);

  // isSearch && {
  // const fetchPlanetQuery = useQuery<PlanetResponse>(getPlanetQuery, ({ variables: queryInput}));
  // const { data: PlanetData, loading: planetLoading } = fetchPlanetQuery;
  // console.log(data, loading)}
  return (
    <>
      <BreadCrumb />
      <div>
        <Descriptions bordered title="Person Details" column={2} size={"small"}>
          <Descriptions.Item label="Name">{props1.name}</Descriptions.Item>
          <Descriptions.Item label="Height">{props1?.height}</Descriptions.Item>
          <Descriptions.Item label="Mass">{props1?.mass}</Descriptions.Item>
          <Descriptions.Item label="Gender">
            {props1.gender.toUpperCase()}
          </Descriptions.Item>
          <Descriptions.Item label="Homeworld">
            Name: {props1.homeworld?.name}
            <br />
            Rotation_period: {props1.homeworld?.rotation_period}
            <br />
            Orbital_period: {props1.homeworld?.orbital_period}
            <br />
            Diameter: {props1.homeworld?.diameter}
            <br />
            Climate: {props1.homeworld?.climate}
            <br />
            Gravity: {props1.homeworld?.gravity}
            <br />
            Terrain: {props1.homeworld?.terrain}
            <br />
            Surface_water: {props1.homeworld?.surface_water}
            <br />
            Population: {props1.homeworld?.population}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </>
  );
};

export default About;

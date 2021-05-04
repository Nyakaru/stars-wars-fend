import React, { useEffect, useState } from "react";
import { Descriptions, Breadcrumb, Card, Row, Col, Tabs, Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useQuery } from "@apollo/client";

import { searchPersonQuery } from "../../server/queries";
import {
  PersonResponse,
  FetchPersonResponse,
  Person,
  Planet,
} from "../People/interface";
import "./people.scss";

export const BreadCrumb = () => {
  return (
    <Breadcrumb style={{ marginBottom: 5 }}>
      <Breadcrumb.Item>
        <a href="/">Home</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="/people/all">Person</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

const About = (props) => {
  const { TabPane } = Tabs;

  const { value } = props;

  const queryInput = {
    search: value,
  };
  const fetchPeopleQuery = useQuery<PersonResponse>(searchPersonQuery, {
    variables: queryInput,
  }) as FetchPersonResponse;
  const { data, loading } = fetchPeopleQuery;

  const [PersonResponse, setPersonResponse] = useState<PersonResponse>({
    searchPerson: {
      person: {} as Person,
      homeworld: {} as Planet,
    },
  });

  const {
    person: { name, height, mass, gender },
    homeworld: {
      name: homewordName,
      orbital_period,
      rotation_period,
      diameter,
      climate,
      gravity,
      terrain,
      surface_water,
      population,
    },
  } = PersonResponse?.searchPerson;

  useEffect(() => {
    if (data) {
      setPersonResponse(data);
    }
  }, [data]);

  return (
    <>
      <BreadCrumb />
      {loading ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : name ? (
        <Row>
          <Col xs={4}></Col>
          <Col xs={14}>
            <Card>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Personal Details" key="1">
                  <Descriptions bordered column={1} size={"small"}>
                    <Descriptions.Item label="Name">{name}</Descriptions.Item>
                    <Descriptions.Item label="Gender">
                      {gender?.toUpperCase()}
                    </Descriptions.Item>
                    <Descriptions.Item label="Mass">{mass}</Descriptions.Item>
                    <Descriptions.Item label="Height">
                      {height}
                    </Descriptions.Item>
                  </Descriptions>
                </TabPane>
                <TabPane tab="Homeworld " key="2">
                  <Descriptions bordered column={1} size={"small"}>
                    <Descriptions.Item label="Name">
                      {homewordName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Population">
                      {population}
                    </Descriptions.Item>
                    <Descriptions.Item label="Climate">
                      {climate?.charAt(0)?.toUpperCase() + climate?.slice(1)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Diameter">
                      {diameter}
                    </Descriptions.Item>
                    <Descriptions.Item label="Terrain">
                      {terrain?.charAt(0)?.toUpperCase() + terrain?.slice(1)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Gravity">
                      {gravity}
                    </Descriptions.Item>
                    <Descriptions.Item label="Surface Water">
                      {surface_water}
                    </Descriptions.Item>
                    <Descriptions.Item label="Rotational">
                      {rotation_period}
                    </Descriptions.Item>
                    <Descriptions.Item label="Orbital period">
                      {orbital_period}
                    </Descriptions.Item>
                  </Descriptions>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xs={4}></Col>
        </Row>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default About;

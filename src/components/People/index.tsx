import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import CustomScrollbars from "../customScrollBar";
import PageSideBar from "../PageSideBar";
import { PeopleResponse, Person } from "./interface";
import { getPeopleQuery } from "../../server/queries";
import PeopleTable from "./PeopleTable";
import PageHeader from "../pageHeader";
import About from "./About";

const PeoplePage = () => {
  const [peopleData, setPeopleData] = useState<Array<Person>>([]);
  const [page, setPage] = useState<number>(1);
  const queryInput = {
    page: page.toString(),
  };
  const fetchPeopleQuery = useQuery<PeopleResponse>(getPeopleQuery, {
    variables: queryInput,
  });
  const { data, loading } = fetchPeopleQuery;

  const onChange = (page: React.SetStateAction<number>) => {
    setPage(page);
  };

  const onSearch = (value) => {
    // console.log({ value})
    <Link
      to={{
        pathname: "/about/all",
        // search: '?query=abc',
        state: { value: value },
      }}
    >
      {" "}
      My Link{" "}
    </Link>;
  };

  useEffect(() => {
    if (data) {
      setPeopleData(data?.people);
    }
  }, [data]);

  return (
    <div className="gx-main-content all-shools">
      <div className="gx-app-module">
        <div className="gx-module-sidenav gx-d-none gx-d-lg-flex">
          <PageSideBar pageTitle="People" />
        </div>

        <div className="gx-module-box">
          <div className="gx-module-box-header">
            <PageHeader props={onSearch} />
          </div>
          <div className="gx-module-box-content">
            {loading ? (
              <LoadingOutlined style={{ fontSize: 24 }} spin />
            ) : (
              <CustomScrollbars className="gx-module-content-scroll">
                {/* @ts-ignore */}
                {data && (
                  <PeopleTable
                    tableData={peopleData}
                    onChange={onChange}
                    current={page}
                  />
                )}
              </CustomScrollbars>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;

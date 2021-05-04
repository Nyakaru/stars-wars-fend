import React from "react";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";

import { TableProps } from "./interface";

const PeopleTable: React.FC<TableProps> = (props) => {
  const { tableData } = props;
  const columns = [
    {
      title: "Star Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <Link to={`/people/${text}`}>{text}</Link>,
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
    },
    {
      title: "Gender",
      key: "gender",
      dataIndex: "gender",
      render: (text: string) => {
        return (
          <Tag color="green" key={text}>
            {text.toUpperCase()}
          </Tag>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      pagination={{
        current: props.current,
        total: 82,
        showSizeChanger: false,
        responsive: true,
        onChange: props.onChange,
      }}
    />
  );
};

export default PeopleTable;

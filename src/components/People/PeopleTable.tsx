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
      render: (text) => (
        <Link to="/about/all">
          <a>{text}</a>
        </Link>
      ),
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
      render: (text) => {
        return (
          <Tag color="green" key={text}>
            {text}
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
      // onRow={() => {
      //   return {
      //     onClick: props.onRow, // click row
      //   }
      // }
      // }
    />
  );
};

export default PeopleTable;

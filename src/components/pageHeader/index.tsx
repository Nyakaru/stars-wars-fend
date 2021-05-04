import { Input, Space } from "antd";
import { useHistory } from "react-router-dom";

const { Search } = Input;

const PageHeader = () => {
  const history = useHistory();
  return (
    <Space direction="horizontal">
      <Search
        placeholder="Input star name"
        onSearch={(value) => history.push(`/people/${value}`)}
        enterButton
      />
    </Space>
  );
};

export default PageHeader;

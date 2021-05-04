import { Input, Space } from "antd";

const { Search } = Input;

const PageHeader = (props) => {
  return (
    <Space direction="vertical">
      {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} /> */}
      <Search
        placeholder="Input star name"
        onSearch={props.onSearch}
        enterButton
      />

      {/* <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    /> */}
    </Space>
  );
};
// const PageHeader: React.FC<PageHeaderProps> = (props) => {
//   const { placeholder, onChange, value } = props;
//   return (
//     <div className="gx-module-box-header-inner">
//       <div className="gx-search-bar gx-lt-icon-search-bar-lg gx-module-search-bar gx-d-none gx-d-sm-block">
//         <div className="gx-form-group">
//           <input
//             className="ant-input gx-border-0"
//             type="search"
//             placeholder={placeholder}
//             onChange={(e) => onChange(e.target.value)}
//             value={value}
//           />
//           <span className="gx-search-icon gx-pointer">
//             <i className="icon icon-search" />
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// PageHeader.defaultProps = {
//   value: "",
// };

export default PageHeader;

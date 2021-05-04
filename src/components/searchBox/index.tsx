import React from "react";

//local imports
import { SearchBoxProps } from "./interface";

const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { styleName, placeholder, onChange, value } = props;

  return (
    <div className={`gx-search-bar ${styleName}`}>
      <div className="gx-form-group">
        <input
          className="ant-input"
          type="search"
          placeholder={placeholder}
          onChange={(event) => onChange(event)}
          value={value}
        />
        <span className="gx-search-icon gx-pointer">
          <i className="icon icon-search" />
        </span>
      </div>
    </div>
  );
};
export default SearchBox;

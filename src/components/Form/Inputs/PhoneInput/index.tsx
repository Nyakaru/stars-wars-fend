import React from "react";
import { Form } from "antd";
import RePhoneInput from "react-phone-number-input";

import { PhoneItemProps } from "../interface";
import "../input.scss";

const PhoneInput: React.FC<PhoneItemProps> = (props) => {
  const { label, handleChange, name, value, itemLayout } = props;

  const handlePhoneChange = (value: string) => {
    handleChange(value);
  };
  return (
    <Form.Item
      hasFeedback
      {...itemLayout}
      name={name}
      label={label}
      rules={[
        { required: true, message: "Please input your phone number!" },
        { max: 13, message: "Phone must contain 9 digits" },
        { min: 11, message: "Phone must contain 9 digits" },
      ]}
    >
      <RePhoneInput
        className="phone-input"
        placeholder="Enter phone number"
        value={value}
        onChange={handlePhoneChange}
        maxLength={9}
      />
    </Form.Item>
  );
};

export default PhoneInput;

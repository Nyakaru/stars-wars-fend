import React, { useState } from "react";
import { Form, Input } from "antd";

import { InputItemProps } from "../interface";

const PhoneInput: React.FC<InputItemProps> = (props) => {
  const { label, name, rules, itemLayout, placeholder } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <Form.Item
      hasFeedback
      {...itemLayout}
      name={name}
      label={label}
      rules={rules}
    >
      <Input placeholder={placeholder} value={inputValue} />
    </Form.Item>
  );
};

export default PhoneInput;

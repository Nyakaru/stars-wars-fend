import React, { useEffect, useState } from "react";
import { Upload, Form, Button } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";

import { UploadFileProps, UploadItemProps } from "../interface";
import "../input.scss";

const UploadItem: React.FC<UploadItemProps> = (props) => {
  const {
    label,
    name,
    itemLayout,
    imageUrl,
    className,
    imageName,
    handleChange,
  } = props;

  const [error, setError] = useState<string>("");
  const [currentImage, setCurrentImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const beforeUpload = (file: UploadFileProps) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      setError("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setError("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const uploadButton = (
    <div>
      {isUploading ? (
        <Button icon={<LoadingOutlined />}>Uploading...</Button>
      ) : currentImage ? (
        <img src={currentImage} alt="avatar" style={{ width: "30%" }} />
      ) : (
        <Button icon={<UploadOutlined />}>Upload image</Button>
      )}
    </div>
  );

  useEffect(() => {
    if (imageUrl) {
      setCurrentImage(imageUrl);
    }
  }, [imageName]);

  const cloudinaryUpload = (uploadOptions: any) => {
    setIsUploading(true);
    const { file, onSuccess, onError } = uploadOptions;
    const url = process.env.REACT_APP_CLOUNDINARY_API as string;
    const uploadPreset = process.env.REACT_APP_PRESET_NAME as string;
    const fileData = new FormData();
    fileData.append("file", file);
    fileData.append("upload_preset", uploadPreset);
    axios
      .post(url, fileData)
      .then((response) => {
        const { secure_url } = response.data;
        if (secure_url) {
          setCurrentImage(secure_url);
        }
        const uploadedData = { url: secure_url, fileName: file.name };
        handleChange(uploadedData);
        onSuccess(uploadedData);
        setIsUploading(false);
      })
      .catch((error) => {
        onError(error);
        setIsUploading(false);
      });
  };

  return (
    <Form.Item
      className={className}
      {...itemLayout}
      name={name}
      label={label}
      rules={[]}
    >
      <Upload
        showUploadList={false}
        beforeUpload={beforeUpload}
        customRequest={cloudinaryUpload}
      >
        {uploadButton}
      </Upload>
    </Form.Item>
  );
};

export default UploadItem;

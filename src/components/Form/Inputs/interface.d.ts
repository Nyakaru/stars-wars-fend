import { Rule } from "rc-field-form/lib/interface";
import { FormItemProps, InputProps, SelectProps, UploadProps } from "antd";
import { PhoneInputProps } from "react-phone-number-input";

export interface PhoneItemProps
  extends Omit<PhoneInputProps, "onChange">,
    FormItemProps {
  handleChange: Function;
  itemLayout?: object;
}

export interface InputItemProps extends InputProps, FormItemProps {
  itemLayout?: object;
}

export interface SelectionInputProps extends InputProps, FormItemProps {}

export interface Option {
  label: string;
  value: any;
}

export interface UploadFileProps {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  originFileObj?: File | Blob;
  error?: any;
  linkProps?: any;
  type: string;
  preview?: string;
}

export interface UploadItemProps extends UploadProps, FormItemProps {
  itemLayout?: object;
  isUploading: boolean;
  imageUrl?: string;
  imageName?: string;
  handleChange: Function;
}

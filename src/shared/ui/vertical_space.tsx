import { Space } from "antd";
import { FC, PropsWithChildren } from "react";
import "./vertical_space.css";

export const VerticalSpace: FC<PropsWithChildren> = ({ children }) => (
  <Space className="vertical_space" direction="vertical">
    {children}
  </Space>
);

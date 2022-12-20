import { Layout } from "antd";
import { FC, PropsWithChildren, ReactNode } from "react";
import "./root_layout.css";

export const RootLayout: FC<PropsWithChildren<{ header?: ReactNode }>> = ({
  header,
  children,
}) => (
  <Layout className="root_layout">
    <Layout.Header className="root_layout_header">{header}</Layout.Header>
    <Layout.Content className="root_layout_content">{children}</Layout.Content>
  </Layout>
);

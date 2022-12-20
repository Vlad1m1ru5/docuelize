import { ConfigProvider } from "antd";
import { FC, PropsWithChildren } from "react";
import { componentSize, form, space } from "./config";

export const AppConfigProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigProvider componentSize={componentSize} form={form} space={space}>
    {children}
  </ConfigProvider>
);

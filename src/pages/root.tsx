import { FC } from "react";
import { Outlet } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { RootLayout } from "../widgets/root_layout";

export const Root: FC = () => (
  <RootLayout header={<img src={reactLogo} alt="React Logo" />}>
    <Outlet />
  </RootLayout>
);

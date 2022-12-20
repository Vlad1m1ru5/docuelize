import { FC } from "react";
import { AppConfigProvider } from "./config_provider";
import "./index.css";
import { AppRouterProvider } from "./router_provider";
import { AppStoreProvider } from "./store_provider";

export const App: FC = () => (
  <AppStoreProvider>
    <AppConfigProvider>
      <AppRouterProvider />
    </AppConfigProvider>
  </AppStoreProvider>
);

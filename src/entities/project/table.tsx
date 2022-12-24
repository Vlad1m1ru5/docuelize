import { Table, TableProps } from "antd";
import { FC } from "react";
import { ProjectRecord } from "./types";

interface Props
  extends Pick<TableProps<ProjectRecord>, "dataSource" | "loading"> {}

export const ProjectTable: FC<Props> = ({ dataSource, loading }) => (
  <Table
    dataSource={dataSource}
    loading={loading}
    rowKey={({ id }) => id}
    columns={[{ key: "name", title: "Name" }]}
  />
);

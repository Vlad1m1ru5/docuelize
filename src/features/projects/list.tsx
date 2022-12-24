import { FC, useMemo } from "react";
import { selectProjectNameFilter } from "../../entities/project/slice";
import { ProjectTable } from "../../entities/project/table";
import { useAppSelector } from "../../shared/hooks";

export const ListProjects: FC = () => {
  const nameFilter = useAppSelector(selectProjectNameFilter);
  const dataSource = useMemo(() => [], [nameFilter]);
  return <ProjectTable dataSource={dataSource} />;
};

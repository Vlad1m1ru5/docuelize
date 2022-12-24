import { Input } from "antd";
import { ChangeEvent, FC } from "react";
import {
  resetNameFilter,
  selectProjectNameFilter,
  setNameFilter,
} from "../../entities/project/slice";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";

export const SearchProjects: FC = () => {
  const dispatch = useAppDispatch();
  const nameFilter = useAppSelector(selectProjectNameFilter);
  const handleSearch = (value: string) => dispatch(setNameFilter(value));
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNameFilter = event.target.value;
    if (!newNameFilter && newNameFilter !== nameFilter) {
      dispatch(resetNameFilter());
    }
  };
  return (
    <Input.Search
      placeholder="Search"
      onChange={handleChange}
      onSearch={handleSearch}
      allowClear
    />
  );
};

import { BookOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { openNewProjectDrawer } from "../../entities/drawer/slice";
import { useAppDispatch } from "../../shared/hooks";

export const OpenNewProject = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      type="primary"
      icon={<BookOutlined />}
      onClick={() => dispatch(openNewProjectDrawer())}
    >
      New
    </Button>
  );
};

import { Button, Col, Drawer, Row } from "antd";
import { FC } from "react";
import {
  closeProjectDrawer,
  selectNewProjectDrawerOpen,
} from "../../entities/drawer/slice";
import { ProjectForm } from "../../entities/project/form";
import { useProjectForm } from "../../entities/project/hooks";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";

export const CreateNewProject: FC = () => {
  const [projectForm] = useProjectForm();
  const handleSubmit = () => projectForm.submit();
  const handleReset = () => projectForm.resetFields();
  const handleResetIfNotOpen = (open: boolean) => {
    if (!open) handleReset();
  };
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(closeProjectDrawer());
  const open = useAppSelector(selectNewProjectDrawerOpen);
  return (
    <Drawer
      closable={false}
      title="New Project"
      open={open}
      onClose={handleClose}
      afterOpenChange={handleResetIfNotOpen}
      footer={
        <Row justify="end" gutter={[24, 24]}>
          <Col>
            <Button onClick={handleClose}>Cancel</Button>
          </Col>
          <Col>
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      }
    >
      <ProjectForm form={projectForm} />
    </Drawer>
  );
};

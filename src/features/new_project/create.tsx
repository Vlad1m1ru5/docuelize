import { Button, Col, Drawer, Modal, Row } from "antd";
import { FC } from "react";
import {
  closeNewProjectDrawer,
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
    if (!open) {
      handleReset();
    }
  };
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(closeNewProjectDrawer());
  const handleCloseWithConfirmIfTouched = () => {
    if (!projectForm.isFieldsTouched()) {
      return handleClose();
    }
    const { destroy } = Modal.confirm({
      title: "Cancel without saving",
      content: "This action will close the form without saving fields values.",
      onOk: () => {
        handleClose();
        destroy();
      },
    });
  };
  const open = useAppSelector(selectNewProjectDrawerOpen);
  return (
    <Drawer
      closable={false}
      title="New Project"
      open={open}
      onClose={handleCloseWithConfirmIfTouched}
      afterOpenChange={handleResetIfNotOpen}
      footer={
        <Row justify="end" gutter={[24, 24]}>
          <Col>
            <Button onClick={handleCloseWithConfirmIfTouched}>Cancel</Button>
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

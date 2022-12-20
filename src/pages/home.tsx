import { Col, Row } from "antd";
import { FC } from "react";
import { CreateNewProject, OpenNewProject } from "../features/new_project";
import { ListProjects, SearchProjects } from "../features/projects";
import { VerticalSpace } from "../shared/ui/vertical_space";

export const Home: FC = () => (
  <VerticalSpace>
    <Row>
      <Col span={12}>
        <OpenNewProject />
      </Col>
      <Col span={12}>
        <SearchProjects />
      </Col>
    </Row>
    <ListProjects />
    <CreateNewProject />
  </VerticalSpace>
);

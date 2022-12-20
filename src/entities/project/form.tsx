import { Form, FormInstance, Input } from "antd";
import { FC } from "react";
import { ProjectValues } from "./types";

export const ProjectForm: FC<{
  form: FormInstance<ProjectValues>;
}> = ({ form }) => (
  <Form layout="vertical" requiredMark="optional" form={form}>
    <Form.Item label="Source URL" name="url" rules={[{ required: true }]}>
      <Input inputMode="url" placeholder="https://my.project/source.git" />
    </Form.Item>
    <Form.Item label="Project name" name="name" rules={[{ required: true }]}>
      <Input placeholder="My Project" />
    </Form.Item>
    <Form.Item label="Description" name="description">
      <Input />
    </Form.Item>
  </Form>
);

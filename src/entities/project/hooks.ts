import { Form, FormInstance } from "antd";
import { ProjectValues } from "./types";

export const useProjectForm: () => [FormInstance<ProjectValues>] = Form.useForm;

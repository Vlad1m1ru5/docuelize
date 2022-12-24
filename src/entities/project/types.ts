export interface ProjectRecord {
  id: string;
  name: string;
  description: string | null;
}

export interface ProjectValues {
  url: string;
  name: string;
  description?: string;
}

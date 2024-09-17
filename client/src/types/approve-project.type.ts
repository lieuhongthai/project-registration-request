import { ProjectRegistration } from './project-registration.type';

export interface ApproveProjectFilters {
  department?: string;
  project_name?: string;
  user?: string;
}

export interface ApproveProjectsResponse {
  data: ProjectRegistration[];
  count: number;
}

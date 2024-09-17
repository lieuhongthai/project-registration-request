import { ApproveProjectFilters, ApproveProjectsResponse } from 'src/types/approve-project.type';
import approveProjectEndpoint from './approve-project.endpoint';
import axios from 'axios';

export const getApproveProjects = async (filters?: ApproveProjectFilters) => {
  const url = approveProjectEndpoint.getList();

  const query: ApproveProjectFilters = {};

  if (filters?.department) {
    query.department = filters.department;
  }

  if (filters?.project_name) {
    query.project_name = filters.project_name;
  }

  if (filters?.user) {
    query.user = filters.user;
  }

  const { data } = await axios.get<ApproveProjectsResponse>(url, { params: query });

  return data;
};

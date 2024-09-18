import axios from 'axios';

type TParams = {
  department?: string | null;
  purpose?: string | null;
};

export type TProjectRegistration = {
  id: number;
  department: string;
  attach?: string[];
  status: string;
  updatedAt: Date;
  createdAt: Date;
  user: string;
};

type TCallback = (data: TProjectRegistration[]) => void;

const getRequestApi = async (params?: TParams, callback?: TCallback) =>
  await axios
    .get(`/api/v1/project-registration`, { params })
    .then(res => {
      if (res && res.status === 200) {
        callback && callback(res.data);
      }

      return res;
    })
    .catch(err => {
      callback && callback([]);

      return err;
    });

const ProjectRegistrationService = { getRequestApi };

export default ProjectRegistrationService;

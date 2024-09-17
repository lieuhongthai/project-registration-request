import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MRTable from 'src/@core/components/table';
import { getApproveProjects } from 'src/api/approve-project/approve-project.api';
import { ApproveProjectsResponse } from 'src/types/approve-project.type';
import ApproveProjectListColumns from 'src/views/approve-project/list/ApproveProjectListColumns';
import SearchApproveProjectsForm from 'src/views/approve-project/list/SearchApproveProjectsForm';

const ApproveProjectList = () => {
  const [searchParams] = useSearchParams();
  const department = searchParams.get('department') ?? '';
  const projectName = searchParams.get('project_name') ?? '';
  const user = searchParams.get('user') ?? '';

  const [approveProjects, setApproveProjects] = useState<ApproveProjectsResponse>({
    data: [],
    count: 0,
  });
  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(() => {
    const fetchApproveProjectList = async () => {
      setIsFetchingData(true);

      const result = await getApproveProjects({ department, project_name: projectName, user });

      setIsFetchingData(false);
      setApproveProjects(result);
    };

    fetchApproveProjectList();
  }, [department, projectName, user]);

  return (
    <Grid container spacing={6}>
      <Grid size={12}>
        <Typography variant='h1'>List of requests</Typography>
      </Grid>

      <Grid size={12}>
        <Card>
          <CardContent>
            <SearchApproveProjectsForm defaultFilters={{ department, project_name: projectName, user }} />
          </CardContent>
        </Card>
      </Grid>

      <Grid size={12}>
        <MRTable data={approveProjects.data} columns={ApproveProjectListColumns()} isLoading={isFetchingData} />
      </Grid>
    </Grid>
  );
};

export default ApproveProjectList;

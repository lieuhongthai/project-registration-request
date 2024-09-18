import { Box, Card, CardContent, CardHeader, Fade, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from 'react';
import SearchPartition from './partition/SearchPartition';
import TablePartition from './partition/TablePartition';

// ** Types
import ProjectRegistrationService, { TProjectRegistration } from 'src/api/project-registration';
import { useRouteLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// ** Validation Schema
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { t } from 'i18next';
import PageHeader from 'src/@core/components/page-header';

const schema = yup.object().shape({
  department: yup.string().max(100).nullable(),
  purpose: yup.string().max(200).nullable(),
});

interface IFormInputs {
  department?: string | null;
  purpose?: string | null;
}

const defaultValues: IFormInputs = {
  department: '',
  purpose: '',
};

const ProjectRegistrationList = () => {
  const [data, setData] = useState<TProjectRegistration[]>([]);
  const [isLoading, setLoading] = useState(false);

  // ** Hook
  const { requests } = useRouteLoaderData('project-registration/list') as { requests: TProjectRegistration[] };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  // ** Effect
  useEffect(() => {
    if (requests) setData(requests);
  }, [requests]);

  const onSubmit = async (data: IFormInputs) => {
    setLoading(true);
    // ** Call API
    await ProjectRegistrationService.getRequestApi(data, data => {
      setData(data);
      setLoading(false);
    });
  };

  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          title={
            <PageHeader
              title={
                <Typography variant='h5' sx={{ color: '#5A5FE0' }}>
                  {t('リクエスト管理 - リスト')}{' '}
                </Typography>
              }
            />
          }
        />

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <SearchPartition control={control} errors={errors} isLoading={isLoading} />
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <TablePartition data={data} isLoading={isLoading} />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectRegistrationList;

import { useState } from 'react';
import CreateFormPartition from './partition/CreateFormPartition';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import PageHeader from 'src/@core/components/page-header';
import { t } from 'i18next';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
const ProjectRegistrationCreate = () => {
  return (
    <Box>
      <Card>
        <CardHeader
          title={
            <PageHeader
              title={
                <Typography variant='h5' sx={{ color: '#5A5FE0' }}>
                  {t('リクエスト管理 - 登録')}
                </Typography>
              }
            />
          }
        />
        <CardContent>
          <DatePickerWrapper>
            <CreateFormPartition />
          </DatePickerWrapper>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectRegistrationCreate;

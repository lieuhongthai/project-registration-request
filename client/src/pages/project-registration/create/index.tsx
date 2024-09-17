import { Box, Table, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import CreateFormPartition from './partition/CreateFormPartition';
const ProjectRegistrationCreate = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant='h5'>Request management - Register</Typography>
        </Grid>
        <Grid size={12}>
          <CreateFormPartition />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectRegistrationCreate;

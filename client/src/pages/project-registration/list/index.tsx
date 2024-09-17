import { Box, Fade, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import SearchPartition from './partition/SearchPartition';
import TablePartition from './partition/TablePartition';
export interface IData {
  id: number;
  department: string;
  attach?: string[];
  status: string;
  updatedAt: Date;
  createdAt: Date;
  user: string;
}

const ProjectRegistrationList = () => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isHidden, setHidden] = useState(true);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant='h5'>Request management - List</Typography>
        </Grid>
        <Grid size={12}>
          <SearchPartition setData={setData} setLoading={setLoading} setHidden={setHidden} />
        </Grid>
        <Grid size={12}>
          <Fade in={!isHidden} timeout={500}>
            <Grid>
              <TablePartition data={data} isLoading={isLoading} />
            </Grid>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectRegistrationList;

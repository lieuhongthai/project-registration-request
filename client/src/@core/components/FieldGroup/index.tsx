import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  label: ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  direction?: 'column' | 'row';
};

const FieldGroup = ({ children, label, fullWidth, direction = 'column', required }: Props) => {
  const isColumnDirection = direction === 'column';

  return (
    <Grid container spacing={2} alignItems='center'>
      <Grid size={{ xs: 12, lg: isColumnDirection ? 12 : 2 }}>
        <FormLabel sx={{ fontWeight: 500 }} required={required}>
          {label}
        </FormLabel>
      </Grid>

      <Grid size={{ xs: 12, lg: isColumnDirection ? 12 : fullWidth ? 10 : 6 }}>{children}</Grid>
    </Grid>
  );
};

export default FieldGroup;

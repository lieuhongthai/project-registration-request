import LoadingButton from '@mui/lab/LoadingButton';
import { FormControl, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FieldGroup from 'src/@core/components/FieldGroup';

const UserSearchFieldField = () => {
  return (
    <form>
      <Grid container rowSpacing={3} columnSpacing={5}>
        <Grid size={12}>
          <FieldGroup label='ユーザー' direction='row'>
            <FormControl fullWidth>
              <TextField />
            </FormControl>
          </FieldGroup>
        </Grid>

        <LoadingButton type='submit' variant='contained' size='large'>
          検索
        </LoadingButton>
      </Grid>
    </form>
  );
};

export default UserSearchFieldField;

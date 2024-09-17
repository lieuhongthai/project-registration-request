import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { FC } from 'react';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import FieldGroup from 'src/@core/components/FieldGroup';

interface IProps {
  control: Control<{ fullName?: string | null | undefined }>;
  errors: FieldErrors<{ fullName?: string }>;
  isLoading?: boolean;
}
const UserSearchFieldField: FC<IProps> = ({ control, errors, isLoading }) => {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <FieldGroup label='ユーザー' direction='row'>
          <FormControl fullWidth>
            <Controller
              name='fullName'
              control={control}
              render={({ field: { name, onChange } }) => (
                <TextField {...{ name, onChange }} slotProps={{ htmlInput: { maxLength: 101 } }} aria-describedby='validation-username' />
              )}
            />
            {errors.fullName && (
              <FormHelperText id='validation-full-name' sx={{ color: 'error.main' }}>
                {errors.fullName.message}
              </FormHelperText>
            )}
          </FormControl>
        </FieldGroup>
      </Grid>

      <LoadingButton loading={isLoading} type='submit' variant='contained' size='large'>
        検索
      </LoadingButton>
    </Grid>
  );
};

export default UserSearchFieldField;

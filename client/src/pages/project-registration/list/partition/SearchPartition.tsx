import React, { Dispatch, FC, SetStateAction } from 'react';
import { Button, Card, CardContent, FormControl, FormHelperText, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid2';
import { Control, Controller, FieldErrors, useForm } from 'react-hook-form';
import axios from 'axios';
import FieldGroup from 'src/@core/components/FieldGroup';
import LoadingButton from '@mui/lab/LoadingButton';

interface IFormInputs {
  department: string;
  purpose: string;
}

const defaultValues = {
  department: '',
  purpose: '',
};

interface IProps {
  control: Control<{ department?: string | null; purpose?: string | null }>;
  errors: FieldErrors<{ department?: string | null; purpose?: string | null }>;
  isLoading?: boolean;
}

const SearchPartition: FC<IProps> = ({ control, errors, isLoading }) => {
  return (
    <Grid container spacing={5}>
      <Grid size={12}>
        <FormControl fullWidth>
          <Controller
            name='department'
            control={control}
            rules={{ maxLength: 255 }}
            render={({ field: { value, onChange } }) => (
              <FieldGroup
                children={
                  <TextField
                    value={value}
                    onChange={onChange}
                    placeholder='部門'
                    error={Boolean(errors.department)}
                    aria-describedby='validation-basic-first-name'
                    fullWidth
                  />
                }
                label='部門'
                direction='row'
              />
            )}
          />
          {errors.department && (
            <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-first-name'>
              {errors.department.message}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>

      <Grid size={12}>
        <FormControl fullWidth>
          <Controller
            name='purpose'
            control={control}
            rules={{ maxLength: 255 }}
            render={({ field: { value, onChange } }) => (
              <FieldGroup
                children={
                  <TextField
                    value={value}
                    onChange={onChange}
                    placeholder='開発背景/目的'
                    error={Boolean(errors.purpose)}
                    aria-describedby='validation-basic-last-name'
                    fullWidth
                  />
                }
                label='開発背景/目的'
                direction='row'
              />
            )}
          />
          {errors.purpose && (
            <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-last-name'>
              {errors.purpose.message}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <LoadingButton size='large' type='submit' variant='contained' startIcon={<SearchIcon />} loading={isLoading}>
        検索
      </LoadingButton>
    </Grid>
  );
};

export default SearchPartition;

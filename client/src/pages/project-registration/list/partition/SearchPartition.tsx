import React, { Dispatch, SetStateAction } from 'react';
import { Button, Card, CardContent, FormControl, FormHelperText, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid2';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import FieldGroup from 'src/@core/components/FieldGroup';

interface IFormInputs {
  department: string;
  purpose: string;
}

interface IData {
  id: number;
  department: string;
  attach?: string[];
  status: string;
  updatedAt: Date;
  createdAt: Date;
  user: string;
}

const defaultValues = {
  department: '',
  purpose: '',
};

interface IProps {
  setData: Dispatch<SetStateAction<IData[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setHidden: Dispatch<SetStateAction<boolean>>;
}

const SearchPartition = ({ setData, setLoading, setHidden }: IProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({ defaultValues });

  const onSubmit = (data: IFormInputs) => {
    setLoading(true);
    axios
      .get(`/api/project-registration`, {
        params: {
          ...data,
        },
      })
      .then(response => {
        setData(response.data);
        setHidden(false);
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Grid size={12}>
              <Button size='large' type='submit' variant='contained' startIcon={<SearchIcon />}>
                検索
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchPartition;

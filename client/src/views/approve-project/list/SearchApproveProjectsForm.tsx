import { yupResolver } from '@hookform/resolvers/yup';
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import FieldGroup from 'src/@core/components/FieldGroup';
import { getOracleDepartments } from 'src/api/common/common.api';
import { getUsers } from 'src/api/user/user.api';
import { ApproveProjectFilters } from 'src/types/approve-project.type';
import { Option } from 'src/types/common.type';
import * as yup from 'yup';

type Props = {
  defaultFilters: ApproveProjectFilters;
};

const SearchApproveProjectsForm = ({ defaultFilters }: Props) => {
  const [_searchParams, setSearchParams] = useSearchParams();

  const [isFetchingOptions, setIsFetchingOptions] = useState(true);
  const [departmentOptions, setDepartmentOptions] = useState<Option<string>[]>([]);
  const [userOptions, setUserOptions] = useState<Option<string>[]>([]);

  const schema = yup.object<ApproveProjectFilters>({
    department: yup.string().max(255),
    project_name: yup.string().max(100),
    user: yup.string().max(100),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ApproveProjectFilters>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues: defaultFilters,
  });

  useEffect(() => {
    const fetchOptions = async () => {
      setIsFetchingOptions(true);

      const [departments, users] = await Promise.all([getOracleDepartments(), getUsers()]);

      setIsFetchingOptions(false);
      setDepartmentOptions(departments.map(department => ({ value: department.name, label: department.name })));
      setUserOptions(users.map(user => ({ value: user.fullName, label: user.fullName })));
    };

    fetchOptions();
  }, []);

  const handleSearch: SubmitHandler<ApproveProjectFilters> = data => {
    const query: ApproveProjectFilters = {};

    if (data.department) {
      query.department = data.department;
    }

    if (data.project_name) {
      query.project_name = data.project_name;
    }

    if (data.user) {
      query.user = data.user;
    }

    setSearchParams(prev => ({ ...prev, ...query }));
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <Grid container spacing={4}>
        <Grid size={12}>
          <FieldGroup label='部門' direction='row'>
            <Controller
              control={control}
              name='department'
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  disabled={isSubmitting}
                  value={departmentOptions.find(option => option.value === field.value) ?? null}
                  onChange={(_e, selected) => field.onChange(selected ? selected.value : '')}
                  options={departmentOptions}
                  loading={isFetchingOptions}
                  renderInput={params => <TextField {...params} error={!!errors.department} helperText={errors.department?.message} />}
                />
              )}
            />
          </FieldGroup>
        </Grid>

        <Grid size={12}>
          <FieldGroup label='プロジェクト名' direction='row'>
            <Controller
              control={control}
              name='project_name'
              render={({ field }) => (
                <TextField
                  {...field}
                  disabled={isSubmitting}
                  error={!!errors.project_name}
                  helperText={errors.project_name?.message}
                  slotProps={{ htmlInput: { maxLength: 101 } }}
                />
              )}
            />
          </FieldGroup>
        </Grid>

        <Grid size={12}>
          <FieldGroup label='ユーザー' direction='row'>
            <Controller
              control={control}
              name='user'
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  value={userOptions.find(option => option.value === field.value) ?? null}
                  onChange={(_e, selected) => field.onChange(selected ? selected.value : '')}
                  disabled={isSubmitting}
                  options={userOptions}
                  renderInput={params => <TextField {...params} error={!!errors.user} helperText={errors.user?.message} />}
                />
              )}
            />
          </FieldGroup>
        </Grid>

        <Grid size={12}>
          <LoadingButton type='submit' startIcon={<SearchIcon />} disabled={!isValid} variant='contained'>
            検索
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchApproveProjectsForm;

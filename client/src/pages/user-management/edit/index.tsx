// ** React Imports
import { ReactNode, useState } from 'react';

// ** Mui Imports
import Grid from '@mui/material/Grid2';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import FormHelperText from '@mui/material/FormHelperText';
import Autocomplete from '@mui/material/Autocomplete';
import LoadingButton from '@mui/lab/LoadingButton';

// ** i18n Import
import { t } from 'i18next';

// ** Router Imports
import { Navigate, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';

// ** Custom Components
import PageHeader from 'src/@core/components/page-header';

// ** Hooks-Form Imports
import { Controller, useForm } from 'react-hook-form';

// ** Validation Schema
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// ** API Imports
import UserManagementApiService, { TUserData } from 'src/api/user-management';

// ** Toast Component
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  fullName: yup.string().max(100, t('フルネームは最大 100 文字までです')).required(t('フルネームは必須項目です')),
  email: yup
    .string()
    .max(255, t('メールアドレスは255文字以内でなければなりません'))
    .email(t('メールアドレスは有効なメールアドレスである必要があります'))
    .required(t('メールアドレスは必須項目です')),
  roles: yup.array().min(1, t('ロールフィールドには少なくとも 1 つの項目が必要です')).required(t('ロールフィールドは必須項目です')),
});

interface FormInputs {
  fullName: string;
  email: string;
  roles: string[];
}

const defaultValues: FormInputs = {
  fullName: '',
  email: '',
  roles: [],
};

const Item = ({ children, label }: { children: ReactNode; label: string }) => (
  <Grid container size={12} alignItems='center'>
    <Grid size={{ xs: 12, sm: 12, md: 12, lg: 1 }}>
      <FormLabel>{label}</FormLabel>
    </Grid>
    <Grid size={'grow'}>{children}</Grid>
  </Grid>
);

const UserEdit = () => {
  // ** State
  const [isLoading, setLoading] = useState(false);

  // ** Hook
  const navigation = useNavigate();
  const { id: userId } = useParams<{ id: string }>();
  const { roles } = useRouteLoaderData('user-management') as { roles: string[] };
  const { user } = useRouteLoaderData('user-management/edit') as { user: TUserData | null };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: user || defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    if (userId) {
      setLoading(true);
      await UserManagementApiService.updateUserApi(userId, data, () => {
        setLoading(false);
        navigation('/user-management');
        toast.success('User updated successfully');
      });
    }
  };

  if (!user) {
    return <Navigate to='/user-management' />;
  }

  return (
    <Box>
      <Card>
        <CardHeader
          title={
            <PageHeader
              title={
                <Typography variant='h5' sx={{ color: '#5A5FE0' }}>
                  {t('ユーザー管理 - 編集')}
                </Typography>
              }
            />
          }
        />

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Item label={t('氏名')}>
                <FormControl fullWidth>
                  <Controller
                    name='fullName'
                    control={control}
                    disabled={isLoading}
                    render={({ field: { name, value, onChange } }) => (
                      <TextField
                        {...{ name, onChange }}
                        slotProps={{ htmlInput: { maxLength: 101 } }}
                        defaultValue={value}
                        aria-describedby='validation-full-name'
                      />
                    )}
                  />
                  {errors.fullName && (
                    <FormHelperText id='validation-full-name' sx={{ color: 'error.main' }}>
                      {errors.fullName.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Item>

              <Item label={t('メール')}>
                <FormControl fullWidth>
                  <Controller
                    name='email'
                    control={control}
                    disabled={isLoading}
                    render={({ field: { name, value, onChange } }) => (
                      <TextField
                        {...{ name, onChange }}
                        slotProps={{ htmlInput: { maxLength: 256 } }}
                        defaultValue={value}
                        aria-describedby='validation-email'
                      />
                    )}
                  />
                  {errors.email && (
                    <FormHelperText id='validation-email' sx={{ color: 'error.main' }}>
                      {errors.email.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Item>

              <Item label={t('ロール')}>
                <FormControl fullWidth>
                  <Controller
                    name='roles'
                    control={control}
                    disabled={isLoading}
                    render={({ field: { name, value, onChange } }) => (
                      <Autocomplete
                        multiple
                        onChange={(_, value) => onChange(value)}
                        id='tags-standard'
                        options={roles}
                        getOptionLabel={option => option}
                        defaultValue={value}
                        renderInput={params => <TextField {...params} name={name} variant='outlined' />}
                      />
                    )}
                  />
                  {errors.roles && (
                    <FormHelperText id='validation-roles' sx={{ color: 'error.main' }}>
                      {errors.roles.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Item>
              <LoadingButton variant='contained' type='submit' loading={isLoading}>
                {t('保存')}
              </LoadingButton>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserEdit;

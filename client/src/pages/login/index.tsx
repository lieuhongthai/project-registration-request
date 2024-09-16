// ** React Imports
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';

// ** MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import Grid from '@mui/material/Grid2';
// ** Icon Imports

// ** Third Party Imports
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// ** Hooks
// import { useAuth } from 'src/hooks/useAuth';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Css Imports
import './login.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AuthApiService from 'src/api/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserDataType } from 'src/api/auth/type';

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(5).required(),
});

interface FormInputs {
  username: string;
  password: string;
}

const defaultValues: FormInputs = {
  password: '',
  username: '',
};
type ErrCallbackType = (err: { [key: string]: string }) => void;

type AuthValuesType = {
  isLoading: boolean;
  logout: () => void;
  login: (params: FormInputs, errorCallback?: ErrCallbackType) => void;
  user: UserDataType | null;
  setUser: (value: UserDataType | null) => void;
  setLoading: (isBool: boolean) => void;
};
const defaultProvider: AuthValuesType = {
  user: null,
  isLoading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};
const LoginPage = () => {
  // ** State
  const [isShowPassword, setShowPassword] = useState<boolean>(false);
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);

  // ** Hooks
  // const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const url = location.state?.from?.pathname + location.state?.from?.search;
  const from = url || '/home';

  useEffect(() => {
    axios
      .get('/api/v1/roles')
      .then()
      .catch(error => {
        console.log(12005, 'error', error);
      });
  }, []);

  const onSubmit = async (data: FormInputs) => {
    const callback = (response: any) => {
      // context auth
      setUser({ ...response.user });

      navigate(from);
    };
    await AuthApiService.authApi({ ...data });
    console.log(data);
  };

  const onClickIcon = () => setShowPassword(!isShowPassword);

  const renderIconPassword = () => {
    return (
      <InputAdornment position='end'>
        <IconButton edge='end' onClick={onClickIcon}>
          <Icon icon={isShowPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Box
      className='content-right background-radial-gradient'
      justifyContent={'center'}
      alignItems={'center'}
      position={'relative'}
      overflow={'hidden'}
      sx={{ margin: 0, padding: 0 }}
      gap={15}
    >
      <Container>
        <Box display='flex' alignItems='center' gap={10}>
          <Grow in={true} timeout={2000}>
            <Box
              color='hsl(218, 81%, 95%)'
              width={500}
              sx={{
                '& img': {
                  width: 1,
                },
                backgroundImage: `url('https://geo-ssv.vn/images/logo_c.svg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
              display={{ xs: 'none', lg: 'inline-block' }}
              flex={1}
            >
              <img src='https://geo-ssv.vn/images/logo_c.svg' alt='Logo' style={{ visibility: 'hidden' }} />
            </Box>
          </Grow>

          <Box position='relative' flex={1} sx={{ maxWidth: '600px', width: '100%' }} marginX={'auto'}>
            <Stack sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Grow in={true} timeout={1300}>
                <div id='radius-shape-1' className='position-absolute rounded-circle shadow-5-strong'></div>
              </Grow>
              <Grow in={true} timeout={2000}>
                <div id='radius-shape-2' className='position-absolute shadow-5-strong'></div>
              </Grow>
              <Grow in={true} timeout={3000}>
                <div id='radius-shape-3' className='position-absolute rounded-circle shadow-5-strong'></div>
              </Grow>

              <Card
                sx={theme => ({
                  zIndex: 1,
                  boxShadow: theme.shadows[7],
                  backgroundColor: 'hsla(0, 0%, 100%, 0.9) !important',
                  backdropFilter: 'saturate(200%) blur(25px)',
                  maxWidth: '550px',
                  width: '100%',
                  mx: 'auto',
                })}
              >
                <CardContent sx={{ p: theme => `${theme.spacing(11, 7, 6.5)} !important`, boxShadow: 10 }}>
                  <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant='h3' sx={{ ml: 2, lineHeight: 1, fontWeight: 700, color: '#0A2149', fontFamily: 'Oswald' }}>
                      {t('IDS_LOGIN_BUTTON')}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      mb: 4,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 400,
                        letterSpacing: '0.18px',
                        fontFamily: 'Oswald',
                        textAlign: 'center',
                        fontSize: {
                          xs: '1.1rem',
                          sm: '1.5rem',
                        },
                      }}
                    >
                      {t('IDS_LOGIN_TITLE')}
                    </Typography>
                  </Box>

                  {/* Form */}

                  <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <Grid container size={12} spacing={6}>
                      <FormControl fullWidth>
                        <Controller
                          name='username'
                          control={control}
                          render={({ field: { name, onChange, value } }) => (
                            <TextField
                              fullWidth
                              name={name}
                              label={t('IDS_LOGIN_NAME')}
                              sx={{ my: 2 }}
                              slotProps={{
                                htmlInput: { maxLength: 50 },
                              }}
                              onChange={onChange}
                              error={!!errors.username}
                              aria-describedby='validation-username'
                            />
                          )}
                        />
                        {errors.username && (
                          <FormHelperText id='validation-username' sx={{ color: 'error.main' }}>
                            {errors.username.message}
                          </FormHelperText>
                        )}
                      </FormControl>

                      {/* Password */}

                      <FormControl fullWidth>
                        <Controller
                          name='password'
                          control={control}
                          render={({ field: { name, onChange } }) => (
                            <TextField
                              fullWidth
                              name={name}
                              label={t('IDS_LOGIN_PASSWORD')}
                              type={isShowPassword ? 'text' : 'password'}
                              onChange={onChange}
                              error={!!errors.password}
                              autoComplete='current-password'
                              slotProps={{
                                htmlInput: { maxLength: 50 },
                                input: {
                                  endAdornment: renderIconPassword(),
                                },
                              }}
                              aria-describedby='validation-password'
                            />
                          )}
                        />
                        {errors.password && (
                          <FormHelperText id='validation-password' sx={{ color: 'error.main' }}>
                            {errors.password.message}
                          </FormHelperText>
                        )}
                      </FormControl>

                      <LoadingButton
                        fullWidth
                        size='large'
                        type='submit'
                        variant='contained'
                        sx={{
                          my: 2,
                          backgroundColor: '#0A2149',
                          ':hover': { backgroundColor: '#114398' },
                        }}
                      >
                        {t('IDS_LOGIN_BUTTON')}
                      </LoadingButton>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;

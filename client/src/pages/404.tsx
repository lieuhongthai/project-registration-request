// ** React Imports

// ** MUI Components
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

// ** Layout Import

// ** Demo Imports
import FooterIllustrations from 'src/views/pages/misc/FooterIllustrations';
import { Link, useRouteError } from 'react-router-dom';

// ** Styled Components
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}));

const Img = styled('img')(({ theme }) => ({
  marginTop: theme.spacing(15),
  marginBottom: theme.spacing(15),
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  }
}));

const Error404 = () => {
  const error = useRouteError();
  console.log(12005, 'isRouteErrorResponse: ', error);

  return (
    <Box className='content-center'>
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h1' sx={{ mb: 2.5 }}>
            404
          </Typography>
          <Typography variant='h5' sx={{ mb: 2.5, letterSpacing: '0.18px', fontSize: '1.5rem !important' }}>
            Page Not Found ⚠️
          </Typography>
          <Typography variant='body2'>We couldn&prime;t find the page you are looking for.</Typography>
        </BoxWrapper>
        <Img alt='error-illustration' src='/images/pages/404.png' />
        <Button to='/' component={Link} variant='contained' sx={{ px: 5.5 }}>
          Back to Home
        </Button>
      </Box>
      <FooterIllustrations image='/images/pages/misc-404-object.png' />
    </Box>
  );
};

export default Error404;

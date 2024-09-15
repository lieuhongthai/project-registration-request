'use client';

// ** React Imports
import { useState } from 'react';

// ** MUI Imports
import Fab from '@mui/material/Fab';
import { Theme, styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

// ** Icon Imports
import Icon from 'src/@core/components/icon';

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig';

// ** Type Import

// ** Components
import AppBar from './components/appBar';
import Navigation from './components/navigation';
import ScrollToTop from 'src/@core/components/scroll-to-top';
import { LayoutProps } from 'src/@core/types/mui/type';
import Footer from './components/footer';
import useMediaQuery from '@mui/material/useMediaQuery';

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const VerticalLayout = (props: LayoutProps) => {
  // ** Props
  const { settings, children, footerProps, contentHeightFixed } = props;

  // ** Vars
  const { skin, contentWidth } = settings;
  const { navigationSize, collapsedNavigationSize } = themeConfig;
  const navWidth = navigationSize;
  const navigationBorderWidth = skin === 'bordered' ? 1 : 0;
  const collapsedNavWidth = collapsedNavigationSize;

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const [navCollapsed, setNavCollapse] = useState<boolean>(settings.navCollapsed || false);

  // ** Hook
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible);
  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        {/* Navigation Menu */}
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          collapsedNavWidth={collapsedNavWidth}
          toggleNavVisibility={toggleNavVisibility}
          navigationBorderWidth={navigationBorderWidth}
          hidden={hidden}
          settings={settings}
          // eslint-disable-next-line react/no-children-prop
          children={children}
          navCollapsed={navCollapsed}
          setNavCollapse={setNavCollapse}
        />
        <MainContentWrapper className='layout-content-wrapper' sx={{ ...(contentHeightFixed && { maxHeight: '100vh' }) }}>
          {/* AppBar Component */}
          <AppBar toggleNavVisibility={toggleNavVisibility} hidden={hidden} {...props} />

          {/* Content */}
          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(contentHeightFixed && {
                overflow: 'hidden',
                '& > :first-of-type': { height: '100%' },
              }),
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' },
              }),
            }}
          >
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          <Footer footerStyles={footerProps?.sx} footerContent={footerProps?.content} {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {/* Scroll to top button */}
      <ScrollToTop className='mui-fixed'>
        <Fab color='primary' size='small' aria-label='scroll back to top'>
          <Icon icon='mdi:arrow-up' />
        </Fab>
      </ScrollToTop>
    </>
  );
};

export default VerticalLayout;

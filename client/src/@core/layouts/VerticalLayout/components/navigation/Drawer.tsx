// ** MUI Imports
import { LayoutProps } from 'src/@core/types/mui/type';
import { styled, useTheme } from '@mui/material/styles';
import MuiSwipeableDrawer, { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';

// ** Type Import

interface Props {
  navWidth: number;
  navHover: boolean;
  navVisible: boolean;
  navCollapsed: boolean;
  collapsedNavWidth: number;
  hidden: boolean;
  navigationBorderWidth: number;
  settings: LayoutProps['settings'];
  children: LayoutProps['children'];
  setNavHover: (values: boolean) => void;
  setNavVisible: (value: boolean) => void;
  // setNavCollapse: (isBool: boolean) => void;
}

const SwipeableDrawer = styled(MuiSwipeableDrawer)<SwipeableDrawerProps>({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none',
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4,
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
  },
});

const Drawer = (props: Props) => {
  // ** Props
  const {
    hidden,
    children,
    navHover,
    navWidth,
    settings,
    navVisible,
    setNavHover,
    navCollapsed,
    setNavVisible,
    collapsedNavWidth,
    navigationBorderWidth,
  } = props;

  // ** Hook
  const theme = useTheme();

  // ** Vars
  const { mode } = settings;

  let flag = true;

  const drawerColors = () => {
    if (mode === 'semi-dark') {
      return {
        backgroundColor: 'customColors.darkBg',
        '& .MuiTypography-root': {
          color: hexToRGBA(theme.palette.customColors.dark, 0.87),
        },
      };
    } else
      return {
        backgroundColor: 'background.default',
      };
  };

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => setNavVisible(true),
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true, // Better open performance on mobile.
    },
  };

  // Drawer Props for Laptop & Desktop screens
  const DesktopDrawerProps = {
    open: true,
    onOpen: () => null,
    onClose: () => null,
    onMouseEnter: () => {
      // Declared flag to resolve first time flicker issue while trying to collapse the menu
      if (flag || navCollapsed) {
        setNavHover(true);
        flag = false;
      }
    },
    onMouseLeave: () => {
      if (navCollapsed) {
        setNavHover(false);
      }
    },
  };

  return (
    <SwipeableDrawer
      className='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{
        sx: {
          ...drawerColors(),
          width: navCollapsed && !navHover ? collapsedNavWidth : navWidth,
          ...(!hidden && navCollapsed && navHover ? { boxShadow: 10 } : {}),
          borderRight: navigationBorderWidth === 0 ? 0 : `${navigationBorderWidth}px solid ${theme.palette.divider}`,
        },
      }}
      sx={{
        width: navCollapsed ? collapsedNavWidth : navWidth,
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default Drawer;

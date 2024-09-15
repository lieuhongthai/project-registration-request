// ** React Import
import { useMemo, useRef, useState } from 'react';

// ** MUI Import
import List from '@mui/material/List';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';

// ** Third Party Components

// ** Type Import
import { LayoutProps } from 'src/@core/types/mui/type';

import themeConfig from 'src/configs/themeConfig';

// ** Component Imports
import Drawer from './Drawer';
import VerticalNavItems from './VerticalNavItems';
import VerticalNavHeader from './VerticalNavHeader';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';
import navigation from '../nav-data-item';

// ** Util Import

interface Props {
  navWidth: number;
  navVisible: boolean;
  navCollapsed: boolean;
  setNavCollapse: (isBool: boolean) => void;
  collapsedNavWidth: number;
  hidden: boolean;
  navigationBorderWidth: number;
  toggleNavVisibility: () => void;
  settings: LayoutProps['settings'];
  children: LayoutProps['children'];
  setNavVisible: (value: boolean) => void;
}

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  '&.scrolled': {
    opacity: 1,
  },
}));

const Navigation = (props: Props) => {
  // ** Props
  const { hidden, settings, navCollapsed } = props;

  // ** States
  const [navHover, setNavHover] = useState<boolean>(false);
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);

  // ** Ref
  const shadowRef = useRef(null);
  const scrollRef = useRef<HTMLElement>(null);

  // ** Hooks
  const theme = useTheme();
  const { mode } = settings;

  // ** Var
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { afterVerticalNavMenuContentPosition: _, beforeVerticalNavMenuContentPosition } = themeConfig;
  const scrollColor = themeConfig.mode === 'light' ? '#BFBFD5 !important' : '#57596C !important';

  // ** Memo
  useMemo(() => {
    if (navCollapsed && !navHover) {
      if (scrollRef && scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [navHover, navCollapsed]);

  // ** Scroll Menu
  const scrollMenu = (container: any) => {
    if (beforeVerticalNavMenuContentPosition === 'static') {
      if (shadowRef && container.target.scrollTop > 0) {
        // @ts-ignore
        if (!shadowRef.current.classList.contains('scrolled')) {
          // @ts-ignore
          shadowRef.current.classList.add('scrolled');
        }
      } else {
        // @ts-ignore
        shadowRef.current.classList.remove('scrolled');
      }
    }
  };

  const shadowBgColor = () => {
    if (mode === 'light') {
      return `linear-gradient(${theme.palette.customColors.lightBg} 5%,${hexToRGBA(theme.palette.customColors.lightBg, 0.85)} 30%,${hexToRGBA(
        theme.palette.customColors.lightBg,
        0.5,
      )} 65%,${hexToRGBA(theme.palette.customColors.lightBg, 0.3)} 75%,transparent)`;
    } else {
      return `linear-gradient(${theme.palette.customColors.darkBg} 5%,${hexToRGBA(theme.palette.customColors.darkBg, 0.85)} 30%,${hexToRGBA(
        theme.palette.customColors.darkBg,
        0.5,
      )} 65%,${hexToRGBA(theme.palette.customColors.darkBg, 0.3)} 75%,transparent)`;
    }
  };

  return (
    <Drawer {...props} navHover={navHover} setNavHover={setNavHover}>
      <VerticalNavHeader {...props} navHover={navHover} />
      <StyledBoxForShadow ref={shadowRef} sx={{ background: shadowBgColor() }} />
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          {...{
            onScroll: (container: any) => scrollMenu(container),
            sx: {
              height: '100%',
              overflowY: 'auto',
              overflowX: 'hidden',

              '::-webkit-scrollbar': {
                width: 4,
                maxHeight: 12,
              },

              '&::-webkit-scrollbar-track': {
                borderRadius: 20,
                backgroundColor: hidden ? scrollColor : 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                borderRadius: 20,
                backgroundColor: 'transparent',
              },
              '&:hover::-webkit-scrollbar-thumb': {
                background: scrollColor,
              },
              '&::-webkit-scrollbar-thumb:window-inactive': {
                backgroundColor: 'transparent',
              },

              scrollbarWidth: 'thin',
            },
          }}
          component={'div'}
          className='perfect-scrollbar-container'
        >
          <List className='nav-items' sx={{ pt: 0, '& > :first-of-type': { mt: 0 } }}>
            <VerticalNavItems
              navHover={navHover}
              groupActive={groupActive}
              setGroupActive={setGroupActive}
              currentActiveGroup={currentActiveGroup}
              setCurrentActiveGroup={setCurrentActiveGroup}
              {...props}
              verticalNavItems={navigation()}
            />
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Navigation;

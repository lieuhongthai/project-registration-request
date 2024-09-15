import { Direction } from '@mui/material/styles';
import {
  AppBar,
  ContentWidth,
  Footer,
  Mode,
  Skin,
  ThemeColor,
  VerticalNavItemsType,
  VerticalNavToggle,
} from '../mui/type';
import { ReactNode } from 'react';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer';
import { AppBarProps } from '@mui/material';

export type VerticalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps;
    content?: (props?: any) => ReactNode;
  };
  navMenu: {
    navItems?: VerticalNavItemsType;
    content?: (props?: any) => ReactNode;
    branding?: (props?: any) => ReactNode;
    afterContent?: (props?: any) => ReactNode;
    beforeContent?: (props?: any) => ReactNode;
    componentProps?: Omit<SwipeableDrawerProps, 'open' | 'onOpen' | 'onClose'>;
  };
};

export type Settings = {
  skin: Skin;
  mode: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean; // navigation menu
  appBarBlur: boolean;
  direction: Direction;
  navCollapsed: boolean;
  themeColor: ThemeColor;
  contentWidth: ContentWidth;
  layout?: 'vertical' | 'horizontal';
  lastLayout?: 'vertical' | 'horizontal';
  verticalNavToggleType: VerticalNavToggle;
  toastPosition?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
};

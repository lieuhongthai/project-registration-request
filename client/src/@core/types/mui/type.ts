import {
  AppBarProps,
  AvatarProps,
  Direction,
  PaletteMode,
  SwipeableDrawerProps,
  SxProps,
  Theme,
} from "@mui/material";
import { ReactNode } from "react";

export type Layout = "vertical" | "horizontal" | "blank" | "blankWithAppBar";

export type Skin = "default" | "bordered";

export type Mode = PaletteMode | "semi-dark";

export type ContentWidth = "full" | "boxed";

export type AppBar = "fixed" | "static" | "hidden";

export type Footer = "fixed" | "static" | "hidden";

export type ThemeColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export type VerticalNavToggle = "accordion" | "collapse";

export type HorizontalMenuToggle = "hover" | "click";

export type BlankLayoutProps = {
  children: ReactNode;
};

export type BlankLayoutWithAppBarProps = {
  children: ReactNode;
};

export type NavSectionTitle = {
  action?: string;
  subject?: string;
  sectionTitle: string;
};

export type NavGroup = {
  icon?: string;
  title: string;
  action?: string;
  subject?: string;
  badgeContent?: string;
  children?: (NavGroup | NavLink)[];
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type NavLink = {
  icon?: string;
  path?: string;
  title: string;

  action?: string;
  subject?: string;
  children?: (NavGroup | NavLink)[];
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  badgeColor?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[];
export type HorizontalNavItemsType = (NavLink | NavGroup)[];

export type FooterProps = {
  sx?: SxProps<Theme>;
  content?: (props?: any) => ReactNode;
};

export type VerticalLayoutProps = {};

export type HorizontalLayoutProps = {
  appBar?: {
    componentProps?: AppBarProps;
    content?: (props?: any) => ReactNode;
    branding?: (props?: any) => ReactNode;
  };
  navMenu?: {
    sx?: SxProps<Theme>;
    navItems?: HorizontalNavItemsType;
    content?: (props?: any) => ReactNode;
  };
};

export type LayoutProps = {
  // hidden: boolean;
  settings: Settings;
  children: ReactNode;
  footerProps?: FooterProps;
  contentHeightFixed?: boolean;
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
  layout?: "vertical" | "horizontal";
  lastLayout?: "vertical" | "horizontal";
  verticalNavToggleType: VerticalNavToggle;
  toastPosition?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
};

export type CustomAvatarProps = AvatarProps & {
  color?: ThemeColor;
  skin?: "filled" | "light" | "light-static";
};

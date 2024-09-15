import { ReactNode } from 'react';
import { AppBar, ContentWidth, Footer, Mode, Settings, Skin, ThemeColor, VerticalNavToggle } from 'src/@core/types/mui/type';
import { Direction } from '@mui/material';

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

export type PageSpecificSettings = {
  skin?: Skin;
  mode?: Mode;
  appBar?: AppBar;
  footer?: Footer;
  navHidden?: boolean; // navigation menu
  appBarBlur?: boolean;
  direction?: Direction;
  navCollapsed?: boolean;
  themeColor?: ThemeColor;
  contentWidth?: ContentWidth;
  layout?: 'vertical' | 'horizontal';
  lastLayout?: 'vertical' | 'horizontal';
  verticalNavToggleType?: VerticalNavToggle;
  toastPosition?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
};

export interface SettingsProviderProps {
  children: ReactNode;
  pageSettings?: PageSpecificSettings | void;
}

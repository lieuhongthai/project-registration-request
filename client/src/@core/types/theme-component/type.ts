import { ReactNode } from 'react';
import { Mode, Skin } from '../mui/type';

export type ThemeComponentType = {
  settings?: ThemeSettings;
  children: ReactNode;
};

export type ThemeSettings = {
  skin: Skin;
  mode: Mode;
};

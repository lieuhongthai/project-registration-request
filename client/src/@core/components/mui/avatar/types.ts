// ** MUI Imports
import { ThemeColor } from 'src/@core/types/mui/type';
import { AvatarProps } from '@mui/material/Avatar';

// ** Types

export type CustomAvatarProps = AvatarProps & {
  color?: ThemeColor;
  skin?: 'filled' | 'light' | 'light-static';
};

import { ReactNode } from 'react';
import { ThemeColor } from '../types/mui/type';

export type NotificationsType = {
  meta: string;
  title: string;
  subtitle: string;
} & (
  | { avatarAlt: string; avatarImg: string; avatarText?: never; avatarColor?: never; avatarIcon?: never }
  | {
      avatarAlt?: never;
      avatarImg?: never;
      avatarText: string;
      avatarIcon?: never;
      avatarColor?: ThemeColor;
    }
  | {
      avatarAlt?: never;
      avatarImg?: never;
      avatarText?: never;
      avatarIcon: ReactNode;
      avatarColor?: ThemeColor;
    }
);

export type AppBarSearchType = {
  id: number;
  url: string;
  icon: string;
  title: string;
  category: string;
};

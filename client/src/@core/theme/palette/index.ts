import { PaletteMode, PaletteOptions } from '@mui/material';
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba';

const paletteMui = (mode: PaletteMode): PaletteOptions => {
  // ** Vars
  const whiteColor = '#FFF';
  const lightColor = '#4C4E64';
  const darkColor = '#EAEAFF';
  const mainColor = mode === 'light' ? lightColor : darkColor;

  // ** Palette Mui Return
  return {
    mode: mode,
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#282A42',
      lightBg: '#F7F7F9',
      bodyBg: mode === 'light' ? '#F7F7F9' : '#282A42', // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === 'light' ? '#F2F2F4' : '#41435C',
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B',
    },
    common: {
      black: '#000',
      white: whiteColor,
    },
    primary: {
      light: '#787EFF',
      main: '#666CFF',
      dark: '#5A5FE0',
      contrastText: whiteColor,
    },
    secondary: {
      light: '#7F889B',
      main: '#6D788D',
      dark: '#606A7C',
      contrastText: whiteColor,
    },
    error: {
      light: '#FF625F',
      main: '#FF4D49',
      dark: '#E04440',
      contrastText: whiteColor,
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: whiteColor,
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor,
    },
    success: {
      light: '#83E542',
      main: '#72E128',
      dark: '#64C623',
      contrastText: whiteColor,
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161',
    },
    text: {
      primary: hexToRGBA(mainColor, 0.87),
      secondary: hexToRGBA(mainColor, 0.6),
      disabled: hexToRGBA(mainColor, 0.38),
    },
    divider: hexToRGBA(mainColor, 0.12),
    background: {
      paper: mode === 'light' ? whiteColor : '#30334E',
      default: mode === 'light' ? whiteColor : '#30334E',
    },
    action: {
      active: hexToRGBA(mainColor, 0.54),
      hover: hexToRGBA(mainColor, 0.05),
      hoverOpacity: 0.05,
      selected: hexToRGBA(mainColor, 0.08),
      disabled: hexToRGBA(mainColor, 0.26),
      disabledBackground: hexToRGBA(mainColor, 0.12),
      focus: hexToRGBA(mainColor, 0.12),
    },
  };
};

export default paletteMui;

// ** MUI Imports
import { ThemeSettings } from 'src/@core/types/theme-component/type';
import themeConfig from 'src/configs/themeConfig';
import { ThemeOptions, darken, lighten } from '@mui/material/styles';

type ComponentsMui = ThemeOptions['components'];

const hexToRGBA = (hexCode: string, opacity: number) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
const componentMui = (settings: ThemeSettings): ComponentsMui => {
  const { skin, mode } = settings;

  const getColor = mode === 'light' ? darken : lighten;
  return {
    // **
    // MuiGrid: {},
    // ** Accordion
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 1],
          '&:first-of-type': {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          ...(skin === 'bordered' && {
            '&:before': { display: 'none' },
            borderLeft: `1px solid ${theme.palette.divider}`,
            borderRight: `1px solid ${theme.palette.divider}`,
            borderBottom: `1px solid ${theme.palette.divider}`,
            '&:first-of-type': { borderTop: `1px solid ${theme.palette.divider}` },
          }),
          '&.Mui-disabled': {
            backgroundColor: hexToRGBA(theme.palette.customColors.main, 0.12),
          },
          '&.Mui-expanded': {
            boxShadow: theme.shadows[skin === 'bordered' ? 0 : 3],
            '&:not(:first-of-type)': { borderTop: `1px solid ${theme.palette.divider}` },
            ...(skin === 'bordered' && {
              '& + .MuiAccordion-root': { borderTop: `1px solid ${theme.palette.divider}` },
            }),
          },
        }),
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 50,
          borderRadius: 'inherit',
          padding: `0 ${theme.spacing(5)}`,
          '&.Mui-expanded': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& + .MuiCollapse-root': {
            '& .MuiAccordionDetails-root:first-of-type': {
              paddingTop: 0,
            },
          },
        }),
        content: ({ theme }) => ({
          margin: `${theme.spacing(2.5)} 0`,
        }),
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiAccordionDetails-root': {
            paddingTop: 0,
          },
        }),
      },
    },

    // ** Alert
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          '& .MuiAlertTitle-root': {
            marginBottom: theme.spacing(1),
          },
          '& a': {
            fontWeight: 500,
            color: 'inherit',
          },
        }),
        standardSuccess: ({ theme }) => ({
          color: getColor(theme.palette.success.main, 0.1),
          backgroundColor: hexToRGBA(theme.palette.success.main, 0.12),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.success.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: getColor(theme.palette.success.main, 0.1),
          },
        }),
        standardInfo: ({ theme }) => ({
          color: getColor(theme.palette.info.main, 0.1),
          backgroundColor: hexToRGBA(theme.palette.info.main, 0.12),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.info.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: getColor(theme.palette.info.main, 0.1),
          },
        }),
        standardWarning: ({ theme }) => ({
          color: getColor(theme.palette.warning.main, 0.1),
          backgroundColor: hexToRGBA(theme.palette.warning.main, 0.12),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.warning.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: getColor(theme.palette.warning.main, 0.1),
          },
        }),
        standardError: ({ theme }) => ({
          color: getColor(theme.palette.error.main, 0.1),
          backgroundColor: hexToRGBA(theme.palette.error.main, 0.12),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.error.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: getColor(theme.palette.error.main, 0.1),
          },
        }),
        outlinedSuccess: ({ theme }) => ({
          borderColor: theme.palette.success.main,
          color: getColor(theme.palette.success.main, 0.1),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.success.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: theme.palette.success.main,
          },
        }),
        outlinedInfo: ({ theme }) => ({
          borderColor: theme.palette.info.main,
          color: getColor(theme.palette.info.main, 0.1),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.info.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: theme.palette.info.main,
          },
        }),
        outlinedWarning: ({ theme }) => ({
          borderColor: theme.palette.warning.main,
          color: getColor(theme.palette.warning.main, 0.1),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.warning.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: theme.palette.warning.main,
          },
        }),
        outlinedError: ({ theme }) => ({
          borderColor: theme.palette.error.main,
          color: getColor(theme.palette.error.main, 0.1),
          '& .MuiAlertTitle-root': {
            color: getColor(theme.palette.error.main, 0.1),
          },
          '& .MuiAlert-icon': {
            color: theme.palette.error.main,
          },
        }),
        filled: ({ theme }) => ({
          fontWeight: 400,
          color: theme.palette.common.white,
        }),
      },
    },

    // ** Autocomplete
    MuiAutocomplete: {
      styleOverrides: {
        root: {},
        paper: ({ theme }) => ({
          boxShadow: theme.shadows[6],
          ...(skin === 'bordered' && { boxShadow: 'none', border: `1px solid ${theme.palette.divider}` }),
        }),
        tagSizeSmall: {},
      },
    },

    // ** Avatar
    MuiAvatar: {
      styleOverrides: {
        colorDefault: ({ theme }) => ({
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
        }),
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.pull-up': {
            '& .MuiAvatar-root': {
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                zIndex: 2,
                boxShadow: theme.shadows[3],
                transform: 'translateY(-4px)',
              },
            },
          },
          justifyContent: 'flex-end',
          '.MuiCard-root & .MuiAvatar-root': {
            borderColor: theme.palette.background.paper,
          },
        }),
      },
    },

    // ** Backdrop
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.mode === 'light' ? hexToRGBA('#101121', 0.5) : hexToRGBA('#101121', 0.87),
        }),
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },

    // ** Breadcrumbs
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          '& > .MuiLink-root': {
            textDecoration: 'none',
          },
        },
      },
    },

    // ** Button
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 500,
          borderRadius: 8,
          lineHeight: 1.715,
          padding: `${theme.spacing(1.75, 3)}`,
          '&.MuiButton-textPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
          },
          '&.MuiButton-textSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08),
          },
          '&.MuiButton-textSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08),
          },
          '&.MuiButton-textError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08),
          },
          '&.MuiButton-textWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08),
          },
          '&.MuiButton-textInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08),
          },
        }),
        contained: ({ theme }) => ({
          boxShadow: theme.shadows[3],
          padding: `${theme.spacing(1.75, 5.5)}`,
        }),
        outlined: ({ theme }) => ({
          lineHeight: 1.572,
          padding: `${theme.spacing(1.75, 5.25)}`,
          '&.MuiButton-outlinedPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
          },
          '&.MuiButton-outlinedSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08),
          },
          '&.MuiButton-outlinedSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08),
          },
          '&.MuiButton-outlinedError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08),
          },
          '&.MuiButton-outlinedWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08),
          },
          '&.MuiButton-outlinedInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08),
          },
        }),
        sizeSmall: ({ theme }) => ({
          lineHeight: 1.693,
          padding: `${theme.spacing(1, 2.25)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(1, 3.25)}`,
          },
          '&.MuiButton-outlined': {
            lineHeight: 1.539,
            padding: `${theme.spacing(1, 3)}`,
          },
        }),
        sizeLarge: ({ theme }) => ({
          lineHeight: 1.734,
          padding: `${theme.spacing(2, 5.5)}`,
          '&.MuiButton-contained': {
            padding: `${theme.spacing(2, 6.5)}`,
          },
          '&.MuiButton-outlined': {
            lineHeight: 1.6,
            padding: `${theme.spacing(2, 6.25)}`,
          },
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: themeConfig.disableRipple,
      },
    },

    // ** Button Group
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    // ** Card
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          '& .card-more-options': {
            marginTop: theme.spacing(-1),
            marginRight: theme.spacing(-3),
          },
          '& .MuiTableContainer-root, & .MuiDataGrid-root, & .MuiDataGrid-columnHeaders': {
            borderRadius: 0,
          },
        }),
      },
      defaultProps: {
        elevation: skin === 'bordered' ? 0 : 6,
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiCardContent-root, & + .MuiCardActions-root, & + .MuiCollapse-root .MuiCardContent-root': {
            paddingTop: 0,
          },
          '& .MuiCardHeader-subheader': {
            fontSize: '0.875rem',
            color: theme.palette.text.secondary,
          },
        }),
        title: {
          lineHeight: 1.6,
          fontWeight: 500,
          fontSize: '1.125rem',
          letterSpacing: '0.15px',
          '@media (min-width: 600px)': {
            fontSize: '1.25rem',
          },
        },
        action: {
          marginTop: 0,
          marginRight: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
            paddingTop: 0,
          },
          '&:last-of-type': {
            paddingBottom: theme.spacing(5),
          },
        }),
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& .MuiButton-text': {
            paddingLeft: theme.spacing(2.5),
            paddingRight: theme.spacing(2.5),
          },
          '&.card-action-dense': {
            padding: theme.spacing(0, 2.5, 2.5),
            '.MuiCard-root .MuiCardMedia-root + &': {
              paddingTop: theme.spacing(2.5),
            },
          },
          '.MuiCard-root &:first-of-type': {
            paddingTop: theme.spacing(2.5),
            '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
              paddingTop: 0,
            },
          },
        }),
      },
    },

    // ** Chip **// ==========><=============
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-rounded': {
            borderRadius: 4,
          },
        },
        outlined: ({ theme }) => ({
          '&.MuiChip-colorDefault': {
            borderColor: hexToRGBA(theme.palette.customColors.main, 0.22),
          },
        }),
        avatar: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        iconColorPrimary: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
        iconColorSecondary: ({ theme }) => ({
          color: theme.palette.secondary.main,
        }),
        deletableColorPrimary: ({ theme }) => ({
          '&.MuiChip-light .MuiChip-deleteIcon': {
            color: hexToRGBA(theme.palette.primary.main, 0.7),
            '&:hover': {
              color: theme.palette.primary.main,
            },
          },
        }),
        deletableColorSecondary: ({ theme }) => ({
          '&.MuiChip-light .MuiChip-deleteIcon': {
            color: hexToRGBA(theme.palette.secondary.main, 0.7),
            '&:hover': {
              color: theme.palette.secondary.main,
            },
          },
        }),
        deleteIconColorPrimary: ({ theme }) => ({
          '&.MuiChip-light .MuiChip-deleteIcon': {
            color: hexToRGBA(theme.palette.success.main, 0.7),
            '&:hover': {
              color: theme.palette.success.main,
            },
          },
        }),
        deleteIconColorSecondary: ({ theme }) => ({
          '&.MuiChip-light .MuiChip-deleteIcon': {
            color: hexToRGBA(theme.palette.error.main, 0.7),
            '&:hover': {
              color: theme.palette.error.main,
            },
          },
        }),
        deletable: ({ theme }) => ({
          '&.MuiChip-light .MuiChip-deleteIcon': {
            color: hexToRGBA(theme.palette.warning.main, 0.7),
            '&:hover': {
              color: theme.palette.warning.main,
            },
          },
        }),
      },
    },

    // **  Grid

    // ** Dialog
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          boxShadow: theme.shadows[skin === 'bordered' ? 0 : 10],
          ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          '&:not(.MuiDialog-paperFullScreen)': {
            '@media (max-width:599px)': {
              margin: theme.spacing(4),
              width: `calc(100% - ${theme.spacing(8)})`,
              maxWidth: `calc(100% - ${theme.spacing(8)}) !important`,
            },
          },
          '& > .MuiList-root': {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
        }),
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '& + .MuiDialogContent-root': {
            paddingTop: 0,
          },
          '& + .MuiDialogActions-root': {
            paddingTop: 0,
          },
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: theme.spacing(5),
          '&.dialog-actions-dense': {
            padding: theme.spacing(2.5),
            paddingTop: 0,
          },
        }),
      },
    },

    // ** Divider
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:not(.MuiDivider-vertical)': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          },
        }),
        middle: ({ theme }) => ({
          '&:not(.MuiDivider-vertical)': {
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5),
          },
          '&.MuiDivider-vertical': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
          },
        }),
      },
    },

    // ** Fab
    MuiFab: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[5],
        }),
      },
    },

    // ** Input
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          lineHeight: '1.5rem',
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`,
          },
          '&.Mui-disabled:before': {
            borderBottomStyle: 'solid',
          },
        }),
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          backgroundColor: hexToRGBA(theme.palette.customColors.main, 0.05),
          '&:hover:not(.Mui-disabled)': {
            backgroundColor: hexToRGBA(theme.palette.customColors.main, 0.08),
          },
          '&:before': {
            borderBottom: `1px solid ${hexToRGBA(theme.palette.customColors.main, 0.22)}`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid ${hexToRGBA(theme.palette.customColors.main, 0.32)}`,
          },
          '&.Mui-disabled': {
            backgroundColor: hexToRGBA(theme.palette.customColors.main, 0.05),
            '&:before': {
              borderBottomStyle: 'solid',
            },
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: hexToRGBA(theme.palette.customColors.main, 0.32),
          },
          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: hexToRGBA(theme.palette.customColors.main, 0.22),
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.disabled,
          },
        }),
      },
    },

    // ** Link
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: 'transparent',
        },
      },
    },

    // ** List
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: 0,
          marginRight: theme.spacing(3),
          color: theme.palette.text.secondary,
        }),
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: 0,
          marginRight: theme.spacing(4),
        }),
      },
    },
    MuiListItemText: {
      styleOverrides: {
        dense: ({ theme }) => ({
          '& .MuiListItemText-primary': {
            color: theme.palette.text.primary,
          },
          '& .MuiListItemText-primary, & .MuiListItemText-secondary': {
            lineHeight: 1.43,
          },
        }),
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontWeight: 600,
          textTransform: 'uppercase',
          color: theme.palette.text.primary,
        }),
      },
    },

    // ** Menu
    MuiMenu: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiMenu-paper': {
            borderRadius: 5,
            boxShadow: skin === 'bordered' ? theme.shadows[0] : theme.palette.mode === 'light' ? theme.shadows[8] : theme.shadows[9],
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          },
        }),
      },
    },

    // ** Pagination
    MuiPaginationItem: {
      styleOverrides: {
        outlined: ({ theme }) => ({
          borderColor: hexToRGBA(theme.palette.customColors.main, 0.22),
        }),
        outlinedPrimary: ({ theme }) => ({
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.24)} !important`,
            },
          },
        }),
        outlinedSecondary: ({ theme }) => ({
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.24)} !important`,
            },
          },
        }),
        rounded: {
          borderRadius: 8,
        },
      },
    },

    // ** Page
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },

    // ** Popover
    MuiPopover: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiPopover-paper': {
            boxShadow: theme.shadows[skin === 'bordered' ? 0 : 6],
            ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` }),
          },
        }),
      },
    },

    // ** Progress
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: 6,
          borderRadius: theme.shape.borderRadius,
          '&.MuiLinearProgress-colorPrimary': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
          },
          '&.MuiLinearProgress-colorSecondary': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
          },
          '&.MuiLinearProgress-colorSuccess': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.12),
          },
          '&.MuiLinearProgress-colorError': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.12),
          },
          '&.MuiLinearProgress-colorWarning': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.12),
          },
          '&.MuiLinearProgress-colorInfo': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.12),
          },
        }),
        bar: ({ theme }) => ({
          borderRadius: theme.shape.borderRadius,
        }),
      },
    },

    // ** Rating
    MuiRating: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.warning.main,
          '& svg': {
            flexShrink: 0,
          },
        }),
        iconEmpty: ({ theme }) => ({
          color: hexToRGBA(theme.palette.customColors.main, 0.22),
        }),
      },
    },

    // ** Select
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          minWidth: '6rem !important',
          '&.MuiTablePagination-select': {
            minWidth: '1.5rem !important',
          },
          '&.Mui-disabled ~ .MuiOutlinedInput-notchedOutline': {
            borderColor: hexToRGBA(theme.palette.customColors.main, 0.22),
          },
        }),
      },
    },

    // ** Snackbar
    MuiSnackbarContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 8,
          padding: theme.spacing(1.75, 4),
          ...(skin === 'bordered' && { boxShadow: 'none' }),
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.grey[100],
          '& .MuiSnackbarContent-message': {
            lineHeight: 1.429,
          },
        }),
      },
    },

    // ** Switch
    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiSwitch-track': {
            borderRadius: theme.shape.borderRadius,
          },

          '& .MuiSwitch-switchBase': {
            '&:not(.Mui-checked)': {
              '& .MuiSwitch-thumb': {
                color: theme.palette.grey[50],
              },
            },
          },
          '& .Mui-disabled + .MuiSwitch-track': {
            backgroundColor: `rgb(${theme.palette.customColors.main})`,
          },
        }),
      },
    },

    // ** Table
    MuiTableContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadows[0],
          borderTopColor: theme.palette.divider,
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          '& .MuiTableCell-head': {
            fontWeight: 500,
            fontSize: '0.75rem',
            lineHeight: '1.959rem',
            letterSpacing: '0.17px',
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiTableCell-body': {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.358rem',
            letterSpacing: '0.15px',
            '&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)': {
              paddingTop: theme.spacing(4),
              paddingBottom: theme.spacing(4),
            },
          },
        }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiTableCell-head:not(.MuiTableCell-paddingCheckbox):first-of-type, & .MuiTableCell-root:not(.MuiTableCell-paddingCheckbox):first-of-type ':
            {
              paddingLeft: theme.spacing(5),
            },
          '& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child': {
            paddingRight: theme.spacing(5),
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
        paddingCheckbox: ({ theme }) => ({
          paddingLeft: theme.spacing(2),
        }),
        stickyHeader: ({ theme }) => ({
          backgroundColor: theme.palette.customColors.tableHeaderBg,
        }),
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiIconButton-root.Mui-disabled': {
            color: theme.palette.action.active,
          },
        }),
        displayedRows: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },

    // ** Tabs
    MuiTabs: {
      styleOverrides: {
        vertical: ({ theme }) => ({
          minWidth: 130,
          marginRight: theme.spacing(4),
          borderRight: `1px solid ${theme.palette.divider}`,
          '& .MuiTab-root': {
            minWidth: 130,
          },
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
        textColorSecondary: ({ theme }) => ({
          '&.Mui-selected': {
            color: theme.palette.text.secondary,
          },
        }),
      },
    },

    // ** Timeline

    // MuiTimelineItem: {
    //   styleOverrides: {
    //     root: {
    //       '&:not(:last-of-type)': {
    //         '& .MuiTimelineContent-root': {
    //           marginBottom: theme.spacing(4),
    //         },
    //       },
    //     },
    //   },
    // },
    // MuiTimelineConnector: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: theme.palette.divider,
    //     },
    //   },
    // },
    // MuiTimelineContent: {
    //   styleOverrides: {
    //     root: {
    //       marginTop: theme.spacing(0.5),
    //     },
    //   },
    // },
    // MuiTimelineDot: {
    //   styleOverrides: {
    //     filledPrimary: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.primary.main, 0.12)}`,
    //     },
    //     filledSecondary: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.secondary.main, 0.12)}`,
    //     },
    //     filledSuccess: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.success.main, 0.12)}`,
    //     },
    //     filledError: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.error.main, 0.12)}`,
    //     },
    //     filledWarning: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.warning.main, 0.12)}`,
    //     },
    //     filledInfo: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.info.main, 0.12)}`,
    //     },
    //     filledGrey: {
    //       boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.grey[400], 0.12)}`,
    //     },
    //     outlinedPrimary: {
    //       '& svg': { color: theme.palette.primary.main },
    //     },
    //     outlinedSecondary: {
    //       '& svg': { color: theme.palette.secondary.main },
    //     },
    //     outlinedSuccess: {
    //       '& svg': { color: theme.palette.success.main },
    //     },
    //     outlinedError: {
    //       '& svg': { color: theme.palette.error.main },
    //     },
    //     outlinedWarning: {
    //       '& svg': { color: theme.palette.warning.main },
    //     },
    //     outlinedInfo: {
    //       '& svg': { color: theme.palette.info.main },
    //     },
    //     outlinedGrey: {
    //       '& svg': { color: theme.palette.grey[400] },
    //     },
    //   },
    // },

    // ** Toggle Button
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    // ** Tooltip
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          borderRadius: 6,
          lineHeight: 1.455,
          backgroundColor: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
        }),
        arrow: ({ theme }) => ({
          color: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9),
        }),
      },
    },

    // ** Typography
    MuiTypography: {
      styleOverrides: {
        gutterBottom: ({ theme }) => ({
          marginBottom: theme.spacing(2),
        }),
      },
    },
  };
};

export default componentMui;

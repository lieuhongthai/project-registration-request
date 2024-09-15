import { ZIndex } from '@mui/material/styles';

const zIndexMui = (): Partial<ZIndex> => ({
  appBar: 1100,
  drawer: 1200,
  fab: 1050,
  mobileStepper: 1000,
  modal: 1300,
  snackbar: 1500,
  speedDial: 1050,
  tooltip: 1500,
});

export default zIndexMui;

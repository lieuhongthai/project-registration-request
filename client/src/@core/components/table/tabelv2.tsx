import { MaterialReactTable, MRT_Row, useMaterialReactTable } from 'material-react-table';
import { MRT_Localization_JA } from 'material-react-table/locales/ja';
import EmptyRowTable from './empty-row';

interface Props {
  columns: any[];
  data: any[];
  isLoading?: boolean;
  onClick?: (data: MRT_Row<any>) => void;
}

const MRTablev2 = ({ columns, data, isLoading, onClick: handleOnclick }: Props) => {
  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: true,
    enableSorting: false,
    // enableBottomToolbar: false,
    enableTopToolbar: false,
    state: {
      isLoading,
    },

    localization: MRT_Localization_JA,
    renderEmptyRowsFallback() {
      return <EmptyRowTable />;
    },
    muiTableBodyRowProps({ row }) {
      return {
        onClick: () => handleOnclick && handleOnclick(row),
        sx: {
          height: '10px',
          padding: 0,
        },
      };
    },

    paginationDisplayMode: 'pages',
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20],
      color: 'primary',
      shape: 'rounded',
      showRowsPerPage: false,
      variant: 'outlined',
    },
  });

  return <MaterialReactTable table={table} />;
};

export default MRTablev2;

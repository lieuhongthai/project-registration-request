import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_JA } from 'material-react-table/locales/ja';
import EmptyRowTable from './empty-row';

interface Props {
  columns: any[];
  data: any[];
  isLoading?: boolean;
}

const MRTable = ({ columns, data, isLoading }: Props) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      state={{
        isLoading,
      }}
      localization={MRT_Localization_JA}
      renderEmptyRowsFallback={() => <EmptyRowTable />}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
          borderTop: '1px solid rgba(81, 81, 81, 1)',
          borderLeft: '1px solid rgba(81, 81, 81, 1)',
          borderBottom: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableBodyRowProps={{
        sx: {
          height: '10px',
        },
      }}
    />
  );
};

export default MRTable;

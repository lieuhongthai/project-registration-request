import React from 'react';
import MRTable from 'src/@core/components/table/tabelv2';
import { MRT_ColumnDef } from 'material-react-table';
import { TProjectRegistration } from 'src/api/project-registration';
import { format } from 'date-fns';

const columns: MRT_ColumnDef<any>[] = [
  {
    accessorKey: 'department',
    header: '申請部門',
    enableSorting: false,
    size: 200,
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
  },
  {
    accessorFn: row => {
      return <div dangerouslySetInnerHTML={{ __html: row.purpose }}></div>;
    },
    header: '開発背景/目的',
    enableSorting: false,
    size: 200,
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
  },
  {
    accessorKey: 'attach',
    header: '添付文書',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
  },
  {
    accessorKey: 'status',
    header: 'スターテス',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
  },
  {
    accessorKey: 'createdAt',
    header: '作成日時',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
    Cell({ renderedCellValue }) {
      return format(new Date(renderedCellValue as string), 'yyyy-M-d HH:mm');
    },
  },
  {
    accessorKey: 'updatedAt',
    header: '更新日時',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },

    Cell({ renderedCellValue }) {
      return format(new Date(renderedCellValue as string), 'yyyy-M-d HH:mm');
    },
  },
  {
    accessorKey: 'userId',
    header: 'ユーザー',
    muiTableHeadCellProps: {
      align: 'center',
    },
    muiTableBodyCellProps: {
      align: 'left',
    },
  },
];

interface IProps {
  data: TProjectRegistration[];
  isLoading: boolean;
}

const TablePartition = ({ data, isLoading }: IProps) => {
  return <MRTable columns={columns} data={data} isLoading={isLoading} />;
};

export default TablePartition;

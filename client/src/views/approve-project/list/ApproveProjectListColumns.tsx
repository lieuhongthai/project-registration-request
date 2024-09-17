import { MRT_ColumnDef } from 'material-react-table';
import { formatDate } from 'src/@core/utils/format';
import { ProjectRegistration } from 'src/types/project-registration.type';

const ApproveProjectListColumns = () => {
  const columns: MRT_ColumnDef<ProjectRegistration>[] = [
    {
      accessorKey: 'department',
      header: '申請部門',
    },
    {
      accessorKey: 'name',
      header: ' プロジェクト名',
    },
    {
      header: '添付文書',
    },
    {
      accessorKey: 'status',
      header: 'スターテス',
    },
    {
      accessorFn: row => formatDate(row.createdAt, 'YYYY/MM/DD'),
      header: '作成日時',
    },
    {
      accessorFn: row => formatDate(row.updatedAt, 'YYYY/MM/DD'),
      header: '更新日時',
    },
    {
      accessorFn: row => row.user.fullName,
      header: 'ユーザー',
    },
  ];

  return columns;
};

export default ApproveProjectListColumns;

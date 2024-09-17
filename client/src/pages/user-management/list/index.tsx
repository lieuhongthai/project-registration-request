import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import PageHeader from 'src/@core/components/page-header';
import { t } from 'i18next';
import UserSearchFieldField from 'src/views/user-management/UserSearchFieldField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import MRTable from 'src/@core/components/table';
import { useEffect, useMemo, useState } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { useRouteLoaderData } from 'react-router';
import UserManagementApiService from 'src/api/user-management';
import IconButton from '@mui/material/IconButton';
import Icon from 'src/@core/components/icon';

type TUserData = {
  id: number;
  fullName: string;
  email: string;
  roles: string[];
};
const UserList = () => {
  // ** State
  const [dataSources, setDataSource] = useState<TUserData[]>([]);

  // ** Hook
  const { users } = useRouteLoaderData('user-management') as { users: TUserData[] };

  // ** Effect
  useEffect(() => {
    if (users) setDataSource(users);
  }, [users]);

  const handleSubmit = () => {};

  const handleDelete = async (id: number) => {
    return await UserManagementApiService.deleteUserApi({ id });
  };

  const columns = useMemo<MRT_ColumnDef<TUserData>[]>(
    () => [
      { accessorKey: 'full_name', header: t('氏名') },
      { accessorKey: 'email', header: t('メール') },
      { accessorKey: 'roles', header: t('ロール') },

      {
        accessorKey: 'action',
        header: t('消去'),

        Cell(props) {
          const { row, renderedCellValue } = props;
          const { id } = row.original;

          return (
            <IconButton onClick={() => handleDelete(id)}>
              <Icon icon='mdi:delete-outline' fontSize={20} />
            </IconButton>
          );
        },
      },
    ],
    [],
  );

  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardHeader
          title={
            <PageHeader
              title={
                <Typography variant='h5' sx={{ color: '#5A5FE0' }}>
                  {t('UserList')}
                </Typography>
              }
            />
          }
        />
        {/* Search */}
        <CardContent>
          <UserSearchFieldField />
        </CardContent>
      </Card>

      {/* List */}

      <Grid container spacing={2}>
        <MRTable columns={columns} data={dataSources} />
      </Grid>
    </Box>
  );
};

export default UserList;

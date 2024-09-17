import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import PageHeader from 'src/@core/components/page-header';
import { t } from 'i18next';
import UserSearchFieldField from 'src/views/user-management/UserSearchFieldField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import MRTable from 'src/@core/components/table/tabelv2';
import { useEffect, useMemo, useState } from 'react';
import { MRT_ColumnDef, MRT_Row } from 'material-react-table';
import { useLocation, useNavigate, useRouteLoaderData, useSearchParams } from 'react-router-dom';
import UserManagementApiService from 'src/api/user-management';
import IconButton from '@mui/material/IconButton';
import Icon from 'src/@core/components/icon';

// ** Third Party Imports
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Chip from '@mui/material/Chip';

type TUserData = {
  id: number;
  fullName: string;
  email: string;
  roles: string[];
};

const schema = yup.object().shape({
  fullName: yup.string().max(100).nullable(),
});

interface FormInputs {
  fullName?: string | null | undefined;
}

const defaultValues: FormInputs = {
  fullName: '',
};

const UserList = () => {
  // ** State
  const [dataSources, setDataSource] = useState<TUserData[]>([]);

  // ** Hook
  const { users } = useRouteLoaderData('user-management') as { users: TUserData[] };
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const [params, setSearchParam] = useSearchParams();
  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  // ** Effect
  useEffect(() => {
    if (users) setDataSource(users);
  }, [users]);

  const handleSerch = (fullName: string) => {
    const callback = (users: TUserData[]) => {
      setDataSource(users);
      setLoading(false);
    };
    UserManagementApiService.getUserListApi({ fullName, callback });
  };

  const onSubmit = ({ fullName }: FormInputs) => {
    setLoading(true);
    // navigate('.', { state: { fullName }, replace: true });
    // if (fullName) setSearchParam({ fullName });
    handleSerch(fullName || '');
  };

  const handleDelete = async (id: number) => {
    return await UserManagementApiService.deleteUserApi({ id });
  };

  const moveEditUser = (row: MRT_Row<TUserData>) => {
    const { id } = row.original;
    navigate(`/user-management/edit/${id}`, { state: { id } });
  };

  const columns = useMemo<MRT_ColumnDef<TUserData>[]>(
    () => [
      { accessorKey: 'fullName', header: t('氏名') },
      { accessorKey: 'email', header: t('メール') },
      {
        accessorKey: 'roles',
        header: t('ロール'),
        Cell({ row }) {
          const { roles } = row.original;

          return roles.map(role => <Chip label={role} variant='filled' size='small' color='primary' />);
        },
      },

      {
        accessorKey: 'action',
        header: t('消去'),
        size: 20,

        Cell({ row }) {
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserSearchFieldField control={control} errors={errors} isLoading={isLoading} />
          </form>
        </CardContent>
      </Card>

      {/* List */}
      <MRTable columns={columns} data={dataSources} onClick={moveEditUser} />
    </Box>
  );
};

export default UserList;

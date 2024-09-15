import { useParams } from 'react-router-dom';

const UserEdit = () => {
  const { id: userId } = useParams<{ id: string }>();

  return <div>UserEdit - User id: {userId}</div>;
};

export default UserEdit;

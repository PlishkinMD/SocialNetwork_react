import { useSelector } from 'react-redux';
import UserCard from './UserCard';

function UsersList() {
  const { items, loading} = useSelector((state) => state.users);

  if (loading) return <div>Загрузка пользователей...</div>;

  return (
    <div style={{ display: 'grid', gap: '10px', maxWidth: '600px' }}>
      {items.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
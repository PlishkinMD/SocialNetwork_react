import { useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import styles from './UsersList.module.css'
function UsersList() {
  const { items, loading} = useSelector((state) => state.users);

  if (loading) return <h2 className={styles.loading_message}>Загрузка пользователей...</h2>;

  return (
    <div className={styles.users_list}>
      {items.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersList;
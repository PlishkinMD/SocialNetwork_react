import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/UsersSlice';
import UsersList from '../features/users/components/UsersList';

function UsersPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.users);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, items.length]);

  return (
    <div>
      <h2>Пользователи</h2>
      <UsersList />
    </div>
  );
}

export default UsersPage;
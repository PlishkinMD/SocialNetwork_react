import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, clearCurrentUser } from '../features/users/UsersSlice';

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentItem, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(id));
    return () => { dispatch(clearCurrentUser()); };
  }, [dispatch, id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
  if (!currentItem) return <div>Пользователь не найден</div>;

  return (
    <div style={{ maxWidth: '500px' }}>
      <button onClick={() => navigate(-1)} style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '5px 12px'}}>← Назад</button>
      <h2>{currentItem.name}</h2>
      <p><strong>Email:</strong> {currentItem.email}</p>
      <p><strong>Телефон:</strong> {currentItem.phone}</p>
      <p><strong>Сайт:</strong> {currentItem.website}</p>
      <p><strong>Компания:</strong> {currentItem.company.name}</p>
      <p><strong>Адрес:</strong> {currentItem.address.city}, {currentItem.address.street}</p>
    </div>
  );
}

export default UserPage;
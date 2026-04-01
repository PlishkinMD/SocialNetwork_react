import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchUserById,
  clearCurrentUser,
} from "../../features/users/UsersSlice";
import styles from "./UserPage.module.css";

function UserPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentItem, loading, error } = useSelector((state) => state.users);

  const prevPage = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchUserById(id));
    return () => {
      dispatch(clearCurrentUser());
    };
  }, [dispatch, id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div className={styles.error_message}>Ошибка: {error}</div>;
  if (!currentItem) return <div>Пользователь не найден</div>;

  return (
    <div className={styles.user_div}>
      <button className={styles.back_button} onClick={prevPage}>
        ← Назад
      </button>
      <h2>{currentItem.name}</h2>
      <p>
        <strong>Email:</strong> {currentItem.email}
      </p>
      <p>
        <strong>Телефон:</strong> {currentItem.phone}
      </p>
      <p>
        <strong>Сайт:</strong> {currentItem.website}
      </p>
      <p>
        <strong>Компания:</strong> {currentItem.company.name}
      </p>
      <p>
        <strong>Адрес:</strong> {currentItem.address.city},{" "}
        {currentItem.address.street}
      </p>
    </div>
  );
}

export default UserPage;

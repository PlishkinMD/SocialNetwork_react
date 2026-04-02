import { useNavigate } from "react-router-dom";
import styles from "./UserCard.module.css";

function UserCard({ user }) {
  const navigate = useNavigate();
  const navToUser = () => navigate(`/users/${user.id}`);

  return (
    <div onClick={navToUser} className={styles.user_in_list}>
      <strong>{user.name}</strong>
      <br></br>
      <small>{user.email}</small>
    </div>
  );
}

export default UserCard;

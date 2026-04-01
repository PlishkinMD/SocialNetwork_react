import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './PostCard.module.css';

function PostCard({ post }) {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.items);
  
  const authorName = users.find(u => u.id === post.userId)?.name;

  const navToPost = () => navigate(`/posts/${post.id}`);

  return (
    <div
      onClick={navToPost}
      className={styles.post_in_list}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <small>
        Автор: <strong>{authorName}</strong>
      </small>
    </div>
  );
}

export default PostCard;
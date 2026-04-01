import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById, clearCurrentPost } from '../../features/posts/PostsSlice';
import styles from './PostPage.module.css'

function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentItem, loading} = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users.items);
  
  const authorName = users.find(u => u.id === currentItem?.userId)?.name;
  const prevPage = () => navigate(-1)

  useEffect(() => {
    dispatch(fetchPostById(id));
    return () => { dispatch(clearCurrentPost()); };
  }, [dispatch, id]);

  if (loading) return <h2 className={styles.loading_message}>Загрузка...</h2>;
  if (!currentItem) return <h2>Пост не найден</h2>;

  return (
    <div className={styles.post_div}>
      <button className={styles.back_button} onClick={prevPage} >← Назад к списку</button>
      <h2>{currentItem.title}</h2>
      <p>{currentItem.body}</p>
      <div className={styles.author_div}>
        <small>
          <strong>Автор:</strong> {authorName} (ID: {currentItem.userId})
          </small>
      </div>
    </div>
  )};
  

export default PostPage;
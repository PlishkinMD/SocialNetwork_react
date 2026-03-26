import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById, clearCurrentPost } from '../features/posts/PostsSlice';

function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentItem, loading, error } = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users.items);
  
  const authorName = users.find(u => u.id === currentItem?.userId)?.name;

  useEffect(() => {
    dispatch(fetchPostById(id));
    return () => { dispatch(clearCurrentPost()); };
  }, [dispatch, id]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;
  if (!currentItem) return <div>Пост не найден</div>;

  return (
    <div style={{ maxWidth: '700px' }}>
      <button onClick={() => navigate(-1)} style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '5px 12px', marginBottom: '10px'}}>← Назад к списку</button>
      <h2 style={{ margin: '0 0 15px 0' }}>{currentItem.title}</h2>
      <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>{currentItem.body}</p>
      <div style={{ 
        padding: '12px', 
        backgroundColor: '#f5f5f5', 
        borderRadius: '6px',
        borderLeft: '4px solid #007bff'
      }}>
        <small><strong>Автор:</strong> {authorName} (ID: {currentItem.userId})</small>
      </div>
    </div>
  );
}

export default PostPage;
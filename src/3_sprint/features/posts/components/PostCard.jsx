import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostCard({ post }) {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.items);
  
  const authorName = users.find(u => u.id === post.userId)?.name;

  return (
    <div
      onClick={() => navigate(`/posts/${post.id}`)}
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
      onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}
    >
      <h3 style={{ margin: '0 0 8px 0' }}>{post.title}</h3>
      <p style={{ margin: '0 0 10px 0', color: '#444' }}>{post.body}</p>
      <small style={{ color: '#666' }}>
        Автор: <strong>{authorName}</strong>
      </small>
    </div>
  );
}

export default PostCard;
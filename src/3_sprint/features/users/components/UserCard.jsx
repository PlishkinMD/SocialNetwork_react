import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/users/${user.id}`)}
      style={{
        padding: '12px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        transition: 'background 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#eef'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
    >
      <strong>{user.name}</strong>
      <br />
      <small style={{ color: '#666' }}>{user.email}</small>
    </div>
  );
}

export default UserCard;
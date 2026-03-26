import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/UsersSlice';
import UsersPage from '../pages/UsersPage';
import UserPage from '../pages/UserPage';
import PostsPage from '../pages/PostsPage';
import PostPage from '../pages/PostPage';

function AppRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px', height: '100vh', boxSizing: 'border-box' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
        <a href="/users" style={{ textDecoration: 'none', color: '#007bff' }}>👥 Пользователи</a>
        <a href="/posts" style={{ textDecoration: 'none', color: '#007bff' }}>📝 Посты</a>
      </nav>
      
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="*" element={<div style={{ padding: '40px', textAlign: 'center' }}>Страница не найдена</div>} />
      </Routes>
    </div>
  );
}

export default AppRouter;
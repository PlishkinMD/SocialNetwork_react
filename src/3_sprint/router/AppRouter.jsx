import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/UsersSlice";
import UsersPage from "../pages/UsersPage";
import UserPage from "../pages/UserPage/UserPage";
import PostsPage from "../pages/PostsPage";
import PostPage from "../pages/PostPage/PostPage";
import styles from "./AppRouter.module.css";
import { FaUsers } from "react-icons/fa6";
import { BsFilePost } from "react-icons/bs";

function AppRouter() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={styles.page_div}>
      <nav className={styles.navbar}>
        <a href="/users">
          <FaUsers className={styles.icon} />
          Пользователи
        </a>
        <a href="/posts">
          <BsFilePost className={styles.icon} />
          Посты
        </a>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;

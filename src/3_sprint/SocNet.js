import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './features/users/UsersSlice';
import postsReducer from './features/posts/PostsSlice';

export const socNetStore = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
  },
});


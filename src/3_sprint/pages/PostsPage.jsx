import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/PostsSlice';
import PostsList from '../features/posts/components/PostsList';

function PostsPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.posts);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, items.length]);

  return (
    <div>
      <h2>Список постов</h2>
      <PostsList />
    </div>
  );
}

export default PostsPage;
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../PostsSlice';
import PostCard from '../PostCard/PostCard';
import styles from './PostsList.module.css'


function PostsList() {
  const dispatch = useDispatch();
  const { items, loading, pagination } = useSelector((state) => state.posts);
  const { currentPage, itemsPerPage } = pagination;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  
  const currentPosts = useMemo(() => 
    items.slice(indexOfFirst, indexOfLast), 
    [items, indexOfFirst, indexOfLast]
  );

  if (loading) return <h2 className={styles.loading_message}>Загрузка постов...</h2>;


  const prevPage = () => dispatch(setCurrentPage(currentPage - 1));
  const nextPage = () => dispatch(setCurrentPage(currentPage + 1));

  return (
    <>
      <div className={styles.posts_list}>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pages_block}>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            ← Назад
          </button>
          <span>Страница {currentPage} из {totalPages}</span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Вперёд →
          </button>
        </div> 
      )} 
    </>
  );
}

export default PostsList;
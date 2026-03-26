import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../posts/PostsSlice';
import PostCard from './PostCard';

function PostsList() {
  const dispatch = useDispatch();
  const { items, loading, error, pagination } = useSelector((state) => state.posts);
  const { currentPage, itemsPerPage } = pagination;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  
  const currentPosts = useMemo(() => 
    items.slice(indexOfFirst, indexOfLast), 
    [items, indexOfFirst, indexOfLast]
  );

  if (loading && items.length === 0) return <div>Загрузка постов...</div>;
  if (error) return <div style={{ color: 'red' }}>Ошибка: {error}</div>;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ marginTop: '25px', display: 'flex', gap: '10px', alignItems: 'center'}}>
          <button
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
            disabled={currentPage === 1}
            style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '10px 25px', margin: '15px'}}
          >
            ← Назад
          </button>
          
          <span>Страница {currentPage} из {totalPages}</span>
          
          <button
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
            disabled={currentPage === totalPages}
            style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '10px 25px', margin: '15px'}}
          >
            Вперёд →
          </button>
        </div>
      )}
    </>
  );
}

export default PostsList;
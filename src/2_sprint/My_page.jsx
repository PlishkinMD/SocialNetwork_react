import { useState, useEffect } from 'react';

function PostsPage() {
    const [usersData, setUsersData] = useState([]);
    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        async function loadUsers() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            setUsersData(data);
            console.log('Загружено:', data.length);
        } catch (error) {
            console.error('Ошибка:', error);
        }
        }
        loadUsers();
    }, []);

    useEffect(() => {
        async function loadPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            setPostsData(data);
            console.log('Загружено:', data.length);
        } catch (error) {
            console.error('Ошибка:', error);
        }
        }
        loadPosts();
    }, []);

 
    let postsPerPage = 20
    const [currPage, setCurrPage] = useState(1);


    function getUsersNameByUserId(userId){
        for (let i = 0; i < usersData.length; i++){
            if (usersData[i].id === userId) {
                return usersData[i].name;
            }
        }
    }

    const totalPages = Math.ceil(postsData.length / postsPerPage);
    const indexOfLast = currPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = postsData.slice(indexOfFirst, indexOfLast);
    


    return (
    <div style={{ 
        display: 'flex', 
        padding: '20px',
        gap: '20px',
        overflow: 'hidden',
        height: '97vh'
    }}>

        <div style={{ 
        width: '25%', 
        borderRight: '1px solid #ddd',
        paddingRight: '20px'
        }}>
        <h2>Пользователи</h2>
        <div>
            {usersData.map(user => (
            <div 
                key={user.id}
                style={{
                padding: '10px',
                marginBottom: '10px',
                border: '1px solid #eee',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#f9f9f9'
                }}
            >
                <strong>{user.name}</strong>
                <br />
                <small style={{ color: '#666' }}>{user.email}</small>
            </div>
            ))}
        </div>
        </div>

        <div style={{ width: '70%', overflowY: 'auto'}}>
        <h1>Список постов</h1>
        
        <div>
            {currentPosts.map(post => (
            <div 
                key={post.id} 
                style={{ 
                border: '1px solid #ccc', 
                margin: '10px 0', 
                padding: '15px',
                borderRadius: '5px',
                }}
            >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <small style={{ color: '#666' }}>
                Автор: <strong>{getUsersNameByUserId(post.userId)}</strong>
                </small>
            </div>
            ))}
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button 
            onClick={() => setCurrPage(prev => prev - 1)}
            disabled={currPage === 1}
            style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '10px 25px'}}
            >
            Назад
            </button>
            
            <span style={{color: 'blue', backgroundColor: 'white',
            outlineWidth: '5px', padding: '10px 25px'}}>
            Страница {currPage} из {totalPages}
            </span>
            
            <button 
            onClick={() => setCurrPage(prev => prev + 1)}
            disabled={currPage === totalPages}
            style={{color: 'blue', backgroundColor: 'white', borderRadius: '8px',
                    outlineStyle: 'auto', outlineWidth: '5px', padding: '10px 25px'}}
            >
            Вперёд
            </button>
        </div>
        </div>
    </div>
    );
    }

export default PostsPage;
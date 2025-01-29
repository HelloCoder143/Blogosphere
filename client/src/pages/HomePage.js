// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = () => {
//     const [posts, setPosts] = useState([]);
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Add logic to check login state

//     useEffect(() => {
//         if (!isLoggedIn) {
//             // Fetch Irene's posts for public access
//             axios.get('/public-posts')
//                 .then(response => setPosts(response.data))
//                 .catch(error => console.error('Error fetching public posts:', error));
//         } else {
//             // Fetch all posts or user-specific posts
//             axios.get('/post')
//                 .then(response => setPosts(response.data))
//                 .catch(error => console.error('Error fetching user posts:', error));
//         }
//     }, [isLoggedIn]);

//     return (
//         <div>
//             <h1>Welcome to the Blog</h1>
//             {posts.length === 0 ? (
//                 <p>No posts available.</p>
//             ) : (
//                 <ul>
//                     {posts.map(post => (
//                         <li key={post._id}>
//                             <h2>{post.title}</h2>
//                             <p>{post.summary}</p>
//                             <small>By: {post.author}</small>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default HomePage;

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext'; // Import UserContext
import Navigation from './Navigation'; // Import the navigation component

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://blogosphere-five.vercel.app/profile', {
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          response.json().then(userInfo => {
            setUserInfo(userInfo);
            setIsLoggedIn(true);
          });
        } else {
          setIsLoggedIn(false);
        }
      });
  }, [setUserInfo]);

  useEffect(() => {
    if (!isLoggedIn) {
      axios.get('https://blogosphere-five.vercel.app/public-posts')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching public posts:', error));
    } else {
      axios.get('https://blogosphere-five.vercel.app/post')
        .then(response => setPosts(response.data))
        .catch(error => console.error('Error fetching user posts:', error));
    }
  }, [isLoggedIn]);

  return (
    <div>
      <Navigation isLoggedIn={isLoggedIn} userInfo={userInfo} />
      <h1>Welcome to the Blog</h1>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <small>By: {post.author.username}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;



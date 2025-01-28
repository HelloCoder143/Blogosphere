import { useEffect, useState, useContext } from "react";
import { UserContext } from '../UserContext';
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo) {
      fetch('http://localhost:4000/post', {
        credentials: 'include',
      })
        .then(response => response.json())
        .then(posts => setPosts(posts));
    }
  }, [userInfo]);

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
}





